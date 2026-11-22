import type { ReactNode } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';

interface PageHeaderProps {
    eyebrow: string;
    title: string;
    children?: ReactNode;
}

/** Page title block shared by the inner pages: label, headline, lead text. */
const PageHeader = ({ eyebrow, title, children }: PageHeaderProps) => (
    <header className="space-y-5 max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {title}
        </h1>
        {children && (
            <div className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed space-y-4">
                {children}
            </div>
        )}
    </header>
);

export default PageHeader;
