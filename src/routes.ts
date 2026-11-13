import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('pages/Home.tsx'),
    route('about', 'pages/About.tsx'),
    route('projects', 'pages/Projects.tsx'),
    route('projects/:slug', 'pages/ProjectDetail.tsx'),
    route('achievements', 'pages/Certificates.tsx'),
    route('contact', 'pages/Contact.tsx'),
    route('sitemap.xml', 'pages/sitemap.ts'),
    route('*', 'pages/NotFound.tsx')
] satisfies RouteConfig;
