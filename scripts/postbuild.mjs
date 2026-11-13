// Runs after `react-router build`.
//
// 1. Guards the SEO contract: every pre-rendered page must ship its own
//    <title>, meta description and canonical URL. A route that forgets its
//    `meta` export fails the build instead of silently shipping a bare page.
// 2. Publishes React Router's SPA fallback as `404.html`. The static host then
//    answers unknown URLs with a real 404 status while the client router still
//    renders the in-app not-found page.
import { readdir, readFile, rename, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';

const out = join(process.cwd(), 'build', 'client');

const fail = message => {
    console.error(`postbuild: ${message}`);
    process.exit(1);
};

/** Every pre-rendered document: build/client/**\/index.html */
async function findPages(dir) {
    const pages = [];
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) pages.push(...(await findPages(full)));
        else if (entry.name === 'index.html') pages.push(full);
    }
    return pages;
}

const pages = await findPages(out);
if (pages.length < 6) fail(`expected pre-rendered pages, found ${pages.length}`);

const canonicals = new Set();
for (const page of pages) {
    const name = relative(out, page);
    const html = await readFile(page, 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

    if (!/<title>[^<]+<\/title>/.test(html)) fail(`${name} has no <title>`);
    if (!/<meta name="description" content="[^"]+"/.test(html))
        fail(`${name} has no meta description`);
    if (!canonical) fail(`${name} has no canonical URL`);
    if (canonicals.has(canonical)) fail(`${name} repeats canonical ${canonical}`);
    canonicals.add(canonical);
}

const sitemap = await readFile(join(out, 'sitemap.xml'), 'utf8').catch(() =>
    fail('sitemap.xml was not generated')
);
for (const canonical of canonicals) {
    if (!sitemap.includes(`<loc>${canonical}</loc>`))
        fail(`sitemap.xml is missing ${canonical}`);
}

await rename(join(out, '__spa-fallback.html'), join(out, '404.html'));
// Loader payload for the sitemap route; nothing ever requests it.
await rm(join(out, 'sitemap.xml.data'), { force: true });

console.log(
    `postbuild: ${pages.length} pages verified (title, description, unique canonical, sitemap entry); wrote 404.html`
);
