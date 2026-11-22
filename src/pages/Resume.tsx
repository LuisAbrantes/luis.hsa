import type { MetaFunction } from 'react-router';
import { Download } from 'lucide-react';
import { certificatesIn } from '@/data/certificates';
import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { getProject } from '@/data/projects';
import {
    AVAILABILITY,
    PERSON,
    RESUME_PDF,
    RESUME_PROJECTS,
    SITE_URL
} from '@/data/site';
import { skillGroups } from '@/data/skills';
import { breadcrumbNode, pageMeta, webPageNode } from '@/lib/seo';

const TITLE = 'Résumé | Luis Henrique Abrantes, Software Engineer';

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Résumé of Luis Henrique Abrantes: software engineer intern on the AI team at Kaffa Tech, Computer Science at IFSP, projects in LLM agents and full-stack work.',
        path: '/resume',
        ogType: 'profile',
        jsonLd: [
            webPageNode('WebPage', '/resume', TITLE),
            breadcrumbNode([{ name: 'Résumé', path: '/resume' }])
        ]
    });

const projects = RESUME_PROJECTS.map(slug => getProject(slug)).filter(
    project => project !== undefined
);

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const contacts = [
    { label: PERSON.email, href: `mailto:${PERSON.email}` },
    { label: host(SITE_URL), href: SITE_URL },
    ...PERSON.profiles
        .filter(url => /github\.com|linkedin\.com/.test(url))
        .map(url => ({ label: host(url), href: url }))
];

const SectionTitle = ({ children }: { children: string }) => (
    <h2 className="resume-section-title">{children}</h2>
);

/**
 * One-page résumé. On screen it is a white sheet on the dark page; in print
 * (and in the PDF generated from it by `npm run resume`) it is the page.
 * Everything comes from `src/data/*`, so it cannot drift from the site.
 */
const Resume = () => (
    <div className="resume-root bg-[#07080b] min-h-screen pt-28 sm:pt-32 pb-24 px-4 sm:px-6 font-sans">
        <div className="resume-toolbar max-w-[8.5in] mx-auto mb-6 flex items-center justify-between gap-4">
            <p className="hidden sm:block text-xs sm:text-sm font-mono text-zinc-500">
                One page. Also available as a PDF.
            </p>
            <a
                href={RESUME_PDF}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-sm whitespace-nowrap"
            >
                <Download size={16} aria-hidden="true" />
                <span>Download PDF</span>
            </a>
        </div>

        <article className="resume-sheet max-w-[8.5in] mx-auto bg-white text-zinc-900 rounded-sm">
            <header>
                <h1 className="resume-name">{PERSON.name}</h1>
                <p className="resume-title">{PERSON.jobTitle}</p>
                <p className="resume-contacts">
                    {contacts.map((item, index) => (
                        <span key={item.href}>
                            {index > 0 && <span aria-hidden="true"> · </span>}
                            <a href={item.href}>{item.label}</a>
                        </span>
                    ))}
                </p>
                <p className="resume-contacts">
                    Based in {AVAILABILITY.location}
                </p>
            </header>

            <section>
                <SectionTitle>Summary</SectionTitle>
                <p>
                    {PERSON.statement} {AVAILABILITY.summary}
                </p>
            </section>

            <section>
                <SectionTitle>Experience</SectionTitle>
                {experiences.map(exp => (
                    <div key={`${exp.company}-${exp.role}`} className="resume-entry">
                        <div className="resume-entry-head">
                            <h3>
                                {exp.role} · {exp.company}
                            </h3>
                            <span>{exp.period.split(' · ')[0]}</span>
                        </div>
                        <p>
                            {exp.description}
                            {exp.location && ` ${exp.location}.`}
                        </p>
                        {exp.highlights && (
                            <ul>
                                {exp.highlights.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section>
                <SectionTitle>Projects</SectionTitle>
                {projects.map(project => (
                    <div key={project.slug} className="resume-entry">
                        <div className="resume-entry-head">
                            <h3>
                                <a href={`${SITE_URL}/projects/${project.slug}`}>
                                    {project.title}
                                </a>
                            </h3>
                            <span>{project.year}</span>
                        </div>
                        <p className="resume-muted">
                            {[
                                project.context,
                                project.technologies.slice(0, 5).join(', ')
                            ]
                                .filter(Boolean)
                                .join(' · ')}
                        </p>
                        <p>{project.shortDescription}</p>
                        <p>{project.role ?? `${project.highlights[0]}.`}</p>
                    </div>
                ))}
            </section>

            <section>
                <SectionTitle>Education</SectionTitle>
                {education.map(item => (
                    <div key={item.degree} className="resume-entry">
                        <div className="resume-entry-head">
                            <h3>{item.degree}</h3>
                            <span>{item.period}</span>
                        </div>
                        <p className="resume-muted">
                            {item.school} · GPA {item.gpa} out of 10
                        </p>
                    </div>
                ))}
            </section>

            <section>
                <SectionTitle>Honors</SectionTitle>
                <p>
                    {certificatesIn('selected')
                        .map(item => `${item.title} (${item.date})`)
                        .join(' · ')}
                </p>
            </section>

            <section>
                <SectionTitle>Skills</SectionTitle>
                <dl className="resume-skills">
                    {skillGroups.map(group => (
                        <div key={group.title}>
                            <dt>{group.title}</dt>
                            <dd>{group.items.join(', ')}</dd>
                        </div>
                    ))}
                </dl>
            </section>
        </article>
    </div>
);

export default Resume;
