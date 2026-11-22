import type { ReactNode } from 'react';

interface PageProps {
    children: ReactNode;
    /** Root element. Project pages are articles; the rest are plain blocks. */
    as?: 'div' | 'article' | 'main';
    className?: string;
}

/**
 * Frame for every inner page. It uses the same container as the top bar
 * (`max-w-6xl` with the padding inside), so page content starts on the same
 * left edge as the site name on every route.
 */
const Page = ({ children, as: Tag = 'div', className = '' }: PageProps) => (
    <Tag
        className={`bg-[#07080b] text-[#EDEDED] min-h-screen pt-28 sm:pt-36 pb-28 font-sans selection:bg-zinc-700 selection:text-white ${className}`}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </Tag>
);

export default Page;
