// Prints the pre-rendered /resume page to public/luis-henrique-abrantes-resume.pdf.
//
// Run `npm run resume` after changing anything the résumé shows (experience,
// education, projects, honors, skills) and commit the PDF. It needs a local
// Chrome, so it is not part of the Vercel build; set CHROME_PATH if Chrome is
// not in the default macOS location.
//
// No dependencies: a tiny static server plus the Chrome DevTools Protocol.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtempSync } from 'node:fs';
import { copyFile, readFile, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { extname, join, normalize } from 'node:path';

const out = join(process.cwd(), 'build', 'client');
const pdfName = 'luis-henrique-abrantes-resume.pdf';
const chromePath =
    process.env.CHROME_PATH ||
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const types = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.woff2': 'font/woff2',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp'
};

await stat(join(out, 'resume', 'index.html')).catch(() => {
    console.error('build-resume: run `npm run build` first');
    process.exit(1);
});

const server = createServer(async (req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
    for (const file of [join(out, path), join(out, path, 'index.html')]) {
        try {
            if ((await stat(file)).isFile()) {
                res.writeHead(200, {
                    'Content-Type': types[extname(file)] || 'application/octet-stream'
                });
                return res.end(await readFile(file));
            }
        } catch {
            // try the next candidate
        }
    }
    res.writeHead(404).end();
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const debugPort = 9600 + Math.floor(Math.random() * 300);
const chrome = spawn(
    chromePath,
    [
        '--headless=new',
        `--remote-debugging-port=${debugPort}`,
        `--user-data-dir=${mkdtempSync(join(tmpdir(), 'resume-'))}`,
        '--no-first-run',
        '--disable-gpu',
        'about:blank'
    ],
    { stdio: 'ignore' }
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function pageSocketUrl() {
    for (let attempt = 0; attempt < 50; attempt++) {
        try {
            const targets = await (
                await fetch(`http://127.0.0.1:${debugPort}/json`)
            ).json();
            const page = targets.find(target => target.type === 'page');
            if (page) return page.webSocketDebuggerUrl;
        } catch {
            // Chrome is still starting
        }
        await sleep(200);
    }
    throw new Error('Chrome did not start');
}

try {
    const socket = new WebSocket(await pageSocketUrl());
    await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));

    let nextId = 0;
    const pending = new Map();
    socket.addEventListener('message', event => {
        const message = JSON.parse(event.data);
        pending.get(message.id)?.(message);
        pending.delete(message.id);
    });
    const send = (method, params = {}) =>
        new Promise((resolve, reject) => {
            const id = ++nextId;
            pending.set(id, message =>
                message.error
                    ? reject(new Error(`${method}: ${message.error.message}`))
                    : resolve(message.result)
            );
            socket.send(JSON.stringify({ id, method, params }));
        });

    await send('Page.enable');
    await send('Page.navigate', { url: `${origin}/resume` });
    await sleep(2500); // fonts and hydration

    const { data } = await send('Page.printToPDF', {
        printBackground: true,
        preferCSSPageSize: true
    });
    const pdf = Buffer.from(data, 'base64');
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;

    await writeFile(join(process.cwd(), 'public', pdfName), pdf);
    await copyFile(join(process.cwd(), 'public', pdfName), join(out, pdfName));
    console.log(
        `build-resume: wrote public/${pdfName} (${Math.round(pdf.length / 1024)} KB, ${pages} page${pages === 1 ? '' : 's'})`
    );
    if (pages !== 1) {
        console.error('build-resume: the résumé no longer fits one page; trim the content');
        process.exitCode = 1;
    }
    socket.close();
} finally {
    chrome.kill();
    server.close();
}
