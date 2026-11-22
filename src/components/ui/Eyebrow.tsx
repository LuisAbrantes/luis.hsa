import type { ReactNode } from 'react';

interface EyebrowProps {
    children: ReactNode;
    /** `accent` is the emerald section marker; `muted` is a quiet label. */
    tone?: 'accent' | 'muted';
    /** Render as a heading when the label is the section's only title. */
    as?: 'span' | 'h2' | 'h3';
    className?: string;
}

/**
 * Small monospace label that opens a section. The same marker is used on every
 * page so sections read as one system.
 */
const Eyebrow = ({
    children,
    tone = 'accent',
    as: Tag = 'span',
    className = ''
}: EyebrowProps) => (
    <div className={`flex items-center gap-2 ${className}`}>
        {tone === 'accent' && (
            <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
            />
        )}
        <Tag
            className={`text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold ${
                tone === 'accent' ? 'text-emerald-400' : 'text-zinc-400'
            }`}
        >
            {children}
        </Tag>
    </div>
);

export default Eyebrow;
