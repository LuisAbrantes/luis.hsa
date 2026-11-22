import { certificatesIn } from '@/data/certificates';
import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { papers } from '@/data/papers';
import { projects } from '@/data/projects';
import { AVAILABILITY, PAPERS_EN_URL, PERSON, SITE_URL } from '@/data/site';
import { socialLinks } from '@/data/socials';

/**
 * /llms.txt: a plain-text index of the site for language-model crawlers and
 * answer engines (https://llmstxt.org). It is generated at build time from
 * the same data as the pages, so it only ever repeats what the pages say.
 */
export function loader() {
    const profiles = socialLinks
        .filter(link => !link.url.startsWith('mailto:'))
        .map(link => `- [${link.label}](${link.url})`);

    const lines = [
        `# ${PERSON.name}`,
        '',
        `> ${PERSON.description}`,
        '',
        `${AVAILABILITY.summary} Based in ${AVAILABILITY.location}.`,
        '',
        `Also written as: ${PERSON.alternateNames.join(', ')}.`,
        '',
        '## Pages',
        '',
        `- [Home](${SITE_URL}/): profile, selected projects, experience and milestones`,
        `- [About](${SITE_URL}/about): background, work experience, education and tools`,
        `- [Projects](${SITE_URL}/projects): all projects, each with its own page`,
        `- [Honors](${SITE_URL}/achievements): honors, hackathons, competitions and courses`,
        `- [Résumé](${SITE_URL}/resume): one-page résumé, also as a PDF`,
        `- [Contact](${SITE_URL}/contact): email and profiles`,
        '',
        '## Experience',
        '',
        ...experiences.map(
            exp =>
                `- ${exp.role} at ${exp.company} (${exp.period.split(' · ')[0]}): ${exp.description}`
        ),
        '',
        '## Education',
        '',
        ...education.map(
            item => `- ${item.degree}, ${item.school} (${item.period})`
        ),
        '',
        '## Projects',
        '',
        ...projects.map(
            project =>
                `- [${project.title}](${SITE_URL}/projects/${project.slug}): ${project.shortDescription}`
        ),
        '',
        '## Selected honors',
        '',
        ...certificatesIn('selected').map(
            item => `- ${item.title}, ${item.organization} (${item.date})`
        ),
        '',
        '## Writing',
        '',
        `- [Papers](${PAPERS_EN_URL}): technical notes, in English and Portuguese`,
        ...papers.map(paper => `- [${paper.title}](${paper.url}): ${paper.summary}`),
        '',
        '## Contact',
        '',
        `- Email: ${PERSON.email}`,
        ...profiles,
        ''
    ];

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
}
