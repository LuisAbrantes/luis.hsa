import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** A portfolio project shown on /projects and on its own /projects/<slug> page. */
export interface Project {
    id: number;
    /** URL segment for the project's own page: /projects/<slug>. */
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    /** Where/why it was built (event, client, program). Shown under the title. */
    context?: string;
    /** True when built with a team, so the page credits it as a team project. */
    team?: boolean;
    technologies: string[];
    category: ProjectCategory;
    /** Public repo URL. Omit for private projects (e.g. linked only via demo). */
    github?: string;
    demo?: string;
    devpost?: string;
    youtube?: string;
    slides?: string;
    highlights: string[];
    /** When true, the project is surfaced in the Featured section. */
    featured?: boolean;
}

export type ProjectCategory =
    | 'AI Application'
    | 'Automation'
    | 'Hackathon Project'
    | 'Web App'
    | 'Python Package'
    | 'Community Project';

/** Certificate / academic achievement shown on the /achievements page. */
export interface Certificate {
    id: number;
    title: string;
    institution: string;
    date: string;
    type: CertificateType;
    hours?: number;
    /** Logo/image URL (local asset or remote). */
    image?: string;
    /** Optional Tailwind object-position class, e.g. "object-bottom". */
    imagePosition?: string;
    description?: string;
    newsArticle?: string;
    pdfPath?: string;
}

export type CertificateType =
    | 'courses'
    | 'honors'
    | 'extracurricular'
    | 'events'
    | 'hackathons';

/** An entry in the Home page journey timeline. */
export interface TimelineEntry {
    year: string;
    description: string;
}

/** A navigation card on the Home page. */
export interface NavCard {
    title: string;
    path: string;
    icon: LucideIcon;
    description: string;
}

/** A GitHub achievement badge shown on the /about page. */
export interface GithubAchievement {
    id: number;
    name: string;
    description: string;
    /** Imported asset URL; mutually exclusive with `icon`. */
    image?: string;
    /** Inline icon node; mutually exclusive with `image`. */
    icon?: ReactNode;
}

/** A social/contact link. */
export interface SocialLink {
    icon: ReactNode;
    label: string;
    url: string;
}

/** A professional experience entry shown on the About page. */
export interface Experience {
    role: string;
    company: string;
    period: string;
    location?: string;
    url?: string;
    description: string;
    highlights?: string[];
    /** Marks an ongoing role (renders a "Current" badge). */
    current?: boolean;
}
