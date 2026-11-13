interface NotFoundContentProps {
    code?: string;
    title?: string;
    message?: string;
}

const destinations = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
];

/**
 * Not-found body. Uses plain anchors on purpose: it also renders inside the
 * static fallback document, before the client router exists.
 */
const NotFoundContent = ({
    code = '404',
    title = 'Page not found',
    message = 'This address does not exist on luisabrantes.dev. It may have moved, or the link may be mistyped.'
}: NotFoundContentProps) => (
    <main className="min-h-screen bg-[#07080b] text-[#EDEDED] font-sans flex items-center px-4 sm:px-6 pt-28 pb-24">
        <div className="max-w-3xl mx-auto w-full space-y-6">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-widest uppercase font-semibold">
                    {code}
                </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {title}
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
                {message}
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-800/80 pt-8 text-sm sm:text-base">
                {destinations.map(item => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </main>
);

export default NotFoundContent;
