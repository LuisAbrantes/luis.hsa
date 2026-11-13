import type { Config } from '@react-router/dev/config';
import { projects } from './src/data/projects';

export default {
    appDirectory: 'src',
    // No runtime server: every route below is rendered to its own static HTML
    // file at build time, so crawlers and AI bots get real content per URL.
    ssr: false,
    prerender: ({ getStaticPaths }) => [
        ...getStaticPaths(),
        ...projects.map(project => `/projects/${project.slug}`)
    ]
} satisfies Config;
