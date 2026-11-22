import type { MouseEvent, ReactNode } from 'react';
import {
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useLocation,
    useOutlet,
    useRouteError
} from 'react-router';
import type { LinksFunction, MetaFunction } from 'react-router';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import './index.css';
import './App.css';
import NavBar from '@/components/layout/NavBar';
import PageTransition from '@/components/layout/PageTransition';
import NotFoundContent from '@/components/layout/NotFoundContent';
import { PERSON } from '@/data/site';
import geistSans from '@/assets/fonts/Geist-Variable.woff2?url';

export const links: LinksFunction = () => [
    {
        rel: 'preload',
        href: geistSans,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
    },
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
];

/**
 * Fallback only: every page route exports its own `meta`, which replaces this.
 * It gives the static not-found document a title before the router boots.
 */
export const meta: MetaFunction = () => [{ title: PERSON.name }];

/**
 * Document shell. Rendered to static HTML at build time for every route, so
 * per-page <title>, description, canonical and JSON-LD come from each route's
 * `meta` export (see `src/lib/seo.ts`), never from a hand-written index.html.
 */
export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#07080b" />
                <meta name="author" content={PERSON.name} />
                <meta
                    name="google-site-verification"
                    content="furAXzVGbN5A1g2j7wuPoFQl0RzlU52ThruNTTc65Kg"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

/**
 * Moves keyboard focus and the viewport to the page content. Done by hand
 * instead of relying on the "#content" hash, because on a hash change the
 * router restores a scroll position saved earlier in the same tab.
 */
const skipToContent = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const content = document.getElementById('content');
    content?.scrollIntoView();
    content?.focus({ preventScroll: true });
};

const Shell = ({ children }: { children: ReactNode }) => (
    <div className="site-shell min-h-screen bg-[#07080b] text-[#EDEDED]">
        <a href="#content" onClick={skipToContent} className="skip-link">
            Skip to content
        </a>
        <NavBar />
        <div id="content" tabIndex={-1} className="outline-none">
            {children}
        </div>
    </div>
);

export default function App() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        // reducedMotion="user": visitors who ask their system for less motion
        // get opacity changes without the movement.
        <MotionConfig reducedMotion="user">
            <Shell>
                {/* initial={false}: the first paint is the pre-rendered HTML,
                    so the enter animation only plays on client-side
                    navigations. */}
                <AnimatePresence mode="wait" initial={false}>
                    <PageTransition key={location.pathname}>
                        {outlet}
                    </PageTransition>
                </AnimatePresence>
            </Shell>
        </MotionConfig>
    );
}

/**
 * Shown by the static fallback document (served as 404.html for unknown URLs)
 * until the client router takes over and renders the not-found route.
 */
export function HydrateFallback() {
    return <NotFoundContent />;
}

export function ErrorBoundary() {
    const error = useRouteError();
    const isNotFound = isRouteErrorResponse(error) && error.status === 404;

    return (
        <Shell>
            <NotFoundContent
                code={isNotFound ? '404' : 'Error'}
                title={isNotFound ? 'Page not found' : 'Something went wrong'}
                message={
                    isNotFound
                        ? undefined
                        : 'An unexpected error happened while loading this page.'
                }
            />
        </Shell>
    );
}
