import type { MetaDescriptor } from 'react-router';
import {
    SITE_URL,
    PERSON,
    PAPERS_URL,
    PRESS,
    DEFAULT_OG_IMAGE
} from '@/data/site';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

/**
 * SEO layer. Every route's `meta` export calls `pageMeta()`, so each
 * pre-rendered page ships its own <title>, description, canonical, social
 * tags and JSON-LD, all derived from `src/data/*`.
 */

type JsonLd = Record<string, unknown>;

const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#person`;
const INDEXABLE =
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

/** Absolute URL for a site path ("/" stays "https://…/"). */
export const absoluteUrl = (path: string): string =>
    path.startsWith('http') ? path : `${SITE_URL}${path}`;

const websiteNode = (): JsonLd => ({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: PERSON.name,
    description: `Portfolio of ${PERSON.name}, ${PERSON.jobTitle}.`,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID }
});

const personNode = (): JsonLd => ({
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    alternateName: [...PERSON.alternateNames],
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    url: `${SITE_URL}/`,
    image: {
        '@type': 'ImageObject',
        url: absoluteUrl(PERSON.image),
        width: 800,
        height: 800
    },
    email: `mailto:${PERSON.email}`,
    nationality: { '@type': 'Country', name: 'Brazil' },
    knowsLanguage: ['pt-BR', 'en'],
    sameAs: [...PERSON.profiles],
    alumniOf: [
        {
            '@type': 'CollegeOrUniversity',
            name: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo',
            alternateName: 'IFSP',
            url: 'https://www.ifsp.edu.br/'
        },
        {
            '@type': 'Organization',
            name: 'Kaffa Tech',
            url: 'https://kaffa.tech'
        }
    ],
    memberOf: {
        '@type': 'ProgramMembership',
        programName: 'Google Student Ambassador Program (2026 Global Cohort)',
        hostingOrganization: {
            '@type': 'Organization',
            name: 'Google',
            url: 'https://about.google/'
        }
    },
    hasOccupation: {
        '@type': 'Occupation',
        name: 'Software Engineer',
        description:
            'Builds agent harnesses, multi-agent systems, evaluation loops and full-stack applications with React, TypeScript, Python and FastAPI.'
    },
    knowsAbout: [...PERSON.knowsAbout],
    award: [...PERSON.awards],
    subjectOf: PRESS.map(item => ({
        '@type': 'WebPage',
        url: item.url,
        publisher: { '@type': 'Organization', name: item.publisher }
    }))
});

/** BreadcrumbList for a page one or two levels below the home page. */
export const breadcrumbNode = (
    trail: { name: string; path: string }[]
): JsonLd => ({
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map(
        (item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path)
        })
    )
});

/** Generic page node (WebPage or a subtype) linked to the site and person. */
export const webPageNode = (
    type: 'ProfilePage' | 'AboutPage' | 'CollectionPage' | 'ContactPage',
    path: string,
    name: string,
    extra: JsonLd = {}
): JsonLd => ({
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    inLanguage: 'en',
    dateModified: __BUILD_DATE__,
    ...extra
});

/** Home page: the ProfilePage whose main entity is the person. */
export const profilePageNode = (name: string): JsonLd =>
    webPageNode('ProfilePage', '/', name, {
        mainEntity: { '@id': PERSON_ID }
    });

/** The papers hub lives on its own subdomain; the portfolio only links out. */
export const papersNode = (): JsonLd => ({
    '@type': 'Blog',
    '@id': `${PAPERS_URL}/#blog`,
    url: `${PAPERS_URL}/`,
    name: 'Papers by Luis Abrantes',
    description:
        'Technical essays on AI agent harnesses, developer tooling and systems engineering.',
    author: { '@id': PERSON_ID },
    inLanguage: ['pt-BR', 'en']
});

const projectPath = (project: Project) => `/projects/${project.slug}`;

/** A single project as structured data. `image` is the bundled asset URL. */
export const projectNode = (project: Project, image?: string): JsonLd => {
    const links = [
        project.github,
        project.demo,
        project.devpost,
        project.youtube
    ].filter((link): link is string => Boolean(link));

    return {
        '@type': project.github ? 'SoftwareSourceCode' : 'CreativeWork',
        '@id': `${absoluteUrl(projectPath(project))}#project`,
        name: project.title,
        description: project.shortDescription,
        url: absoluteUrl(projectPath(project)),
        ...(image && { image: absoluteUrl(image) }),
        ...(project.github && { codeRepository: project.github }),
        ...(links.length > 0 && { sameAs: links }),
        keywords: project.technologies.join(', '),
        genre: project.category,
        // Team projects credit Luis as a contributor rather than sole author.
        [project.team ? 'contributor' : 'author']: { '@id': PERSON_ID },
        mainEntityOfPage: absoluteUrl(projectPath(project))
    };
};

/** Every project, in display order, for the /projects collection page. */
export const projectListNode = (): JsonLd => ({
    '@type': 'ItemList',
    '@id': `${SITE_URL}/projects#list`,
    name: `Projects by ${PERSON.name}`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: absoluteUrl(projectPath(project))
    }))
});

interface PageMetaInput {
    /** Full <title>. Keep it under ~60 characters where possible. */
    title: string;
    /** Meta description. Keep it under ~160 characters. */
    description: string;
    /** Canonical path, e.g. "/about". */
    path: string;
    /** Social image; defaults to the site-wide card. */
    image?: { path: string; alt: string; width?: number; height?: number };
    ogType?: 'website' | 'profile' | 'article';
    /** Set for pages that must stay out of search results (e.g. not-found). */
    noindex?: boolean;
    /** Page-specific JSON-LD nodes, added to the shared WebSite + Person graph. */
    jsonLd?: JsonLd[];
}

export const pageMeta = ({
    title,
    description,
    path,
    image = DEFAULT_OG_IMAGE,
    ogType = 'website',
    noindex = false,
    jsonLd = []
}: PageMetaInput): MetaDescriptor[] => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image.path);

    const tags: MetaDescriptor[] = [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: noindex ? 'noindex, follow' : INDEXABLE },
        { property: 'og:type', content: ogType },
        { property: 'og:site_name', content: PERSON.name },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:alt', content: image.alt },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:image:alt', content: image.alt }
    ];

    if (image.width && image.height) {
        tags.push(
            { property: 'og:image:width', content: String(image.width) },
            { property: 'og:image:height', content: String(image.height) }
        );
    }

    if (ogType === 'profile') {
        tags.push(
            { property: 'profile:first_name', content: PERSON.givenName },
            { property: 'profile:last_name', content: PERSON.familyName },
            { property: 'profile:username', content: 'LuisAbrantes' }
        );
    }

    if (noindex) return tags;

    return [
        ...tags,
        { tagName: 'link', rel: 'canonical', href: url },
        {
            'script:ld+json': {
                '@context': 'https://schema.org',
                '@graph': [websiteNode(), personNode(), ...jsonLd]
            }
        }
    ];
};

/** Trim copy to a meta-description length without cutting a word in half. */
export const truncate = (text: string, max = 158): string => {
    if (text.length <= max) return text;
    const cut = text.slice(0, max - 1);
    return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.—-]+$/, '')}…`;
};
