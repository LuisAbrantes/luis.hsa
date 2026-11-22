import { Link, useParams } from 'react-router';
import type { MetaFunction } from 'react-router';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ExternalLink,
    FileText,
    Github,
    Hexagon,
    Youtube
} from 'lucide-react';
import NotFoundContent from '@/components/layout/NotFoundContent';
import Page from '@/components/layout/Page';
import { getProject, projects } from '@/data/projects';
import { projectScreenshots, projectShareImage } from '@/data/projectImages';
import { PERSON } from '@/data/site';
import { breadcrumbNode, pageMeta, projectNode, truncate } from '@/lib/seo';
import type { Project } from '@/types';

export const meta: MetaFunction = ({ params, location }) => {
    const project = getProject(params.slug);

    if (!project) {
        return pageMeta({
            title: `Project not found | ${PERSON.name}`,
            description: 'This project does not exist on luisabrantes.dev.',
            path: location.pathname,
            noindex: true
        });
    }

    const path = `/projects/${project.slug}`;
    const image = projectShareImage(project.slug);

    return pageMeta({
        title: `${project.title} | ${project.category} by ${PERSON.name}`,
        description: truncate(project.shortDescription),
        path,
        ogType: 'article',
        image: { path: image, alt: `${project.title} cover` },
        jsonLd: [
            projectNode(project, image),
            breadcrumbNode([
                { name: 'Projects', path: '/projects' },
                { name: project.title, path }
            ])
        ]
    });
};

/** External links for a project, in priority order. */
const projectLinks = (project: Project) =>
    [
        { href: project.demo, label: 'Live demo', icon: ExternalLink },
        { href: project.github, label: 'Source code', icon: Github },
        { href: project.devpost, label: 'Devpost', icon: Hexagon },
        { href: project.youtube, label: 'Video', icon: Youtube },
        { href: project.slides, label: 'Slides', icon: FileText }
    ].filter(
        (link): link is typeof link & { href: string } => Boolean(link.href)
    );

const sectionLabel =
    'text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest font-semibold';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProject(slug);

    if (!project) {
        return (
            <NotFoundContent
                title="Project not found"
                message="There is no project at this address. Browse the full list on the projects page."
            />
        );
    }

    const index = projects.indexOf(project);
    const previous = projects[index - 1];
    const next = projects[index + 1];
    const links = projectLinks(project);
    const [primaryLink, ...otherLinks] = links;
    const screenshot = projectScreenshots[project.slug];

    return (
        <Page as="article">
                <nav
                    aria-label="Breadcrumb"
                    className="text-xs sm:text-sm font-mono text-zinc-500"
                >
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                            >
                                <ArrowLeft size={14} />
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li aria-current="page" className="text-zinc-300">
                            {project.title}
                        </li>
                    </ol>
                </nav>

                <header className="pt-10 space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-widest uppercase font-semibold">
                            {project.category}
                            {project.team && ' · Team project'}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                        {project.shortDescription}
                    </p>

                    {project.context && (
                        <p className="text-xs sm:text-sm font-mono text-zinc-500">
                            {project.context}
                        </p>
                    )}

                    {links.length > 0 && (
                        <div className="pt-3 flex items-center gap-4 flex-wrap">
                            <a
                                href={primaryLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm sm:text-base shadow-md"
                            >
                                <primaryLink.icon size={18} />
                                <span>{primaryLink.label}</span>
                            </a>
                            {otherLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-all text-sm sm:text-base"
                                >
                                    <link.icon size={18} />
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </header>

                {/* Only a real capture of the product is shown. A project
                    without one stays text-first; its cover art is used for
                    link previews only. */}
                {screenshot && (
                    <figure className="mt-12 space-y-3 max-w-5xl">
                        <div className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950">
                            <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                width={screenshot.width}
                                height={screenshot.height}
                                draggable={false}
                                className="w-full h-auto select-none pointer-events-none"
                            />
                        </div>
                        <figcaption className="text-xs sm:text-sm font-mono text-zinc-500">
                            {screenshot.caption}
                        </figcaption>
                    </figure>
                )}

                <div className="mt-14 border-t border-zinc-800/80 pt-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    <div className="md:col-span-8 space-y-12">
                        <section className="space-y-4">
                            <h2 className={sectionLabel}>Overview</h2>
                            {project.fullDescription
                                .split('\n\n')
                                .map(paragraph => (
                                    <p
                                        key={paragraph}
                                        className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                        </section>

                        {project.role && (
                            <section className="space-y-4">
                                <h2 className={sectionLabel}>My part</h2>
                                <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                                    {project.role}
                                </p>
                            </section>
                        )}

                        <section className="space-y-4">
                            <h2 className={sectionLabel}>Key highlights</h2>
                            <ul className="space-y-3">
                                {project.highlights.map(highlight => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-3 text-sm sm:text-base text-zinc-400 font-light leading-relaxed"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <aside className="md:col-span-4 space-y-10">
                        <section className="space-y-4">
                            <h2 className={sectionLabel}>Stack</h2>
                            <ul className="space-y-2.5">
                                {project.technologies.map(tech => (
                                    <li
                                        key={tech}
                                        className="text-sm text-zinc-300 font-light"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className={sectionLabel}>Year</h2>
                            <p className="text-sm text-zinc-300 font-light">
                                {project.year}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className={sectionLabel}>Built by</h2>
                            <p className="text-sm text-zinc-300 font-light leading-relaxed">
                                <Link
                                    to="/about"
                                    className="text-white font-medium underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors"
                                >
                                    {PERSON.name}
                                </Link>
                                {project.team ? ', with a team.' : '.'}
                            </p>
                        </section>
                    </aside>
                </div>

                <nav
                    aria-label="More projects"
                    className="mt-16 border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row justify-between gap-6"
                >
                    {previous ? (
                        <Link
                            to={`/projects/${previous.slug}`}
                            className="group space-y-1"
                        >
                            <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                <ArrowLeft size={12} /> Previous
                            </span>
                            <span className="block text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                {previous.title}
                            </span>
                        </Link>
                    ) : (
                        <Link to="/projects" className="group space-y-1">
                            <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                <ArrowLeft size={12} /> Back
                            </span>
                            <span className="block text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                All projects
                            </span>
                        </Link>
                    )}

                    {next ? (
                        <Link
                            to={`/projects/${next.slug}`}
                            className="group space-y-1 sm:text-right"
                        >
                            <span className="flex items-center sm:justify-end gap-1.5 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                Next <ArrowRight size={12} />
                            </span>
                            <span className="block text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                {next.title}
                            </span>
                        </Link>
                    ) : (
                        <Link
                            to="/contact"
                            className="group space-y-1 sm:text-right"
                        >
                            <span className="flex items-center sm:justify-end gap-1.5 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                Next <ArrowUpRight size={12} />
                            </span>
                            <span className="block text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                Get in touch
                            </span>
                        </Link>
                    )}
                </nav>
        </Page>
    );
};

export default ProjectDetail;
