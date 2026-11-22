import type { MetaFunction } from 'react-router';
import Eyebrow from '@/components/ui/Eyebrow';
import Page from '@/components/layout/Page';
import PageHeader from '@/components/ui/PageHeader';
import ProjectRow from '@/components/projects/ProjectRow';
import { projects } from '@/data/projects';
import {
    breadcrumbNode,
    pageMeta,
    projectListNode,
    webPageNode
} from '@/lib/seo';

const TITLE = 'Projects in Applied AI & Full-Stack | Luis Henrique Abrantes';

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Projects by Luis Henrique Abrantes: an LLM college advisor on FastAPI, hackathon builds from UC Berkeley and UPenn, agent harness tooling and client work.',
        path: '/projects',
        jsonLd: [
            webPageNode('CollectionPage', '/projects', TITLE, {
                mainEntity: { '@id': 'https://luisabrantes.dev/projects#list' }
            }),
            projectListNode(),
            breadcrumbNode([{ name: 'Projects', path: '/projects' }])
        ]
    });

const featuredProjects = projects.filter(project => project.featured);
const otherProjects = projects.filter(project => !project.featured);

const Projects = () => (
    <Page>
            <PageHeader
                eyebrow="Projects"
                title="Applied AI and full-stack projects"
            >
                <p>
                    The three I would show first, then everything else.
                    Each one opens a page with the stack, the code and what I
                    built.
                </p>
            </PageHeader>

            <section aria-labelledby="featured-title" className="mt-16">
                <Eyebrow as="h2" className="mb-6">
                    <span id="featured-title">Featured</span>
                </Eyebrow>
                <ol className="border-b border-zinc-800/80">
                    {featuredProjects.map((project, index) => (
                        <ProjectRow
                            key={project.slug}
                            project={project}
                            index={String(index + 1).padStart(2, '0')}
                            size="featured"
                        />
                    ))}
                </ol>
            </section>

            <section aria-labelledby="more-title" className="mt-20">
                <Eyebrow as="h2" tone="muted" className="mb-6">
                    <span id="more-title">More projects</span>
                </Eyebrow>
                <ul className="border-b border-zinc-800/80">
                    {otherProjects.map(project => (
                        <ProjectRow key={project.slug} project={project} />
                    ))}
                </ul>
            </section>
    </Page>
);

export default Projects;
