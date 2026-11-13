import { projects } from '@/data/projects';
import { SITE_URL } from '@/data/site';

/**
 * /sitemap.xml, generated at build time from the route list and project data
 * so it can never drift from the pages that actually exist.
 */
const staticPaths = ['/', '/about', '/projects', '/achievements', '/contact'];

export function loader() {
    const paths = [
        ...staticPaths,
        ...projects.map(project => `/projects/${project.slug}`)
    ];

    const urls = paths
        .map(
            path =>
                `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${__BUILD_DATE__}</lastmod>\n  </url>`
        )
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    });
}
