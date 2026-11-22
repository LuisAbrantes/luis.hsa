import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

const NBSP = '\u00a0';

interface ProjectRowProps {
    project: Project;
    /** Position label for featured rows, e.g. "01". */
    index?: string;
    /** `featured` rows are larger and show the role and the full stack. */
    size?: 'featured' | 'compact';
    /** Heading level of the title, so the outline fits the page it is on. */
    headingLevel?: 'h2' | 'h3';
}

/**
 * One project as an open typographic row. The title is a real link stretched
 * over the whole row (`after:absolute after:inset-0`), so the row is
 * clickable, keyboard-focusable and crawlable without nested anchors.
 */
const ProjectRow = ({
    project,
    index,
    size = 'compact',
    headingLevel: Heading = 'h3'
}: ProjectRowProps) => {
    const featured = size === 'featured';
    const meta = [
        project.context ?? project.category,
        project.year,
        project.team ? `Team${NBSP}project` : undefined
    ]
        .filter(Boolean)
        .join(' · ');
    // A line can break after a separator, never inside a name or before one.
    const stack = (featured ? project.technologies : project.technologies.slice(0, 4))
        .map(name => name.replace(/ /g, NBSP))
        .join(`${NBSP}· `);

    return (
        <li
            className={`group relative grid grid-cols-1 md:grid-cols-12 gap-x-8 border-t border-zinc-800/80 transition-colors hover:border-zinc-600 ${
                featured ? 'gap-y-4 py-10 sm:py-12' : 'gap-y-2 py-6'
            }`}
        >
            {index && (
                <span
                    aria-hidden="true"
                    className="md:col-span-1 text-sm font-mono text-zinc-600 md:pt-2"
                >
                    {index}
                </span>
            )}

            <div
                className={`space-y-3 ${
                    index ? 'md:col-span-7' : 'md:col-span-8'
                }`}
            >
                <Heading
                    className={`font-bold text-white tracking-tight leading-tight ${
                        featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                    }`}
                >
                    <Link
                        to={`/projects/${project.slug}`}
                        className="outline-none after:absolute after:inset-0 focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-white/70"
                    >
                        {project.title}
                    </Link>
                </Heading>

                <p className="text-xs sm:text-sm font-mono text-zinc-500">
                    {meta}
                </p>

                <p
                    className={`text-zinc-300 font-light leading-relaxed max-w-2xl ${
                        featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                >
                    {project.shortDescription}
                </p>

                {featured && project.role && (
                    <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                        <span className="text-zinc-200 font-medium">
                            My part:{' '}
                        </span>
                        {project.role}
                    </p>
                )}
            </div>

            <div className="md:col-span-4 flex md:flex-col md:items-end justify-between gap-4 md:text-right">
                <p className="text-xs font-mono text-zinc-500 leading-relaxed">
                    {stack}
                </p>
                <ArrowUpRight
                    size={featured ? 22 : 18}
                    aria-hidden="true"
                    className="flex-shrink-0 text-zinc-600 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </div>
        </li>
    );
};

export default ProjectRow;
