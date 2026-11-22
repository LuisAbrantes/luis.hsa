import type { ReactNode } from 'react';

/** A portfolio project shown on /projects and on its own /projects/<slug> page. */
export interface Project {
    id: number;
    /** URL segment for the project's own page: /projects/<slug>. */
    slug: string;
    title: string;
    /** One or two sentences for lists, meta descriptions and structured data. */
    shortDescription: string;
    /** Body of the project page. A blank line starts a new paragraph. */
    fullDescription: string;
    /** Where/why it was built (event, client, program). Shown under the title. */
    context?: string;
    /** True when built with a team, so the page credits it as a team project. */
    team?: boolean;
    /**
     * What Luis did on a team project. Only what the repository history
     * supports; leave it out when the history does not show a clear part.
     */
    role?: string;
    /** When it was built, from the repository history, e.g. "2025". */
    year: string;
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
    | 'Data Project'
    | 'Community Project';

/** An honor, activity or course shown on the /achievements page. */
export interface Certificate {
    /** Stable key, also used as the anchor id on the page. */
    id: string;
    title: string;
    organization: string;
    /** Display date: a year or a range, e.g. "2025" or "2024–2025". */
    date: string;
    group: CertificateGroup;
    description?: string;
    hours?: number;
    /** Logo under `public/static/`. Only the selected honors show one. */
    logo?: string;
    /** Supporting page: an internal route (starts with "/") or an external URL. */
    link?: { href: string; label: string };
}

/** Sections of the /achievements page, in display order. */
export type CertificateGroup =
    | 'selected'
    | 'leadership'
    | 'competitions'
    | 'courses';

/** An entry in the Home page journey timeline. */
export interface TimelineEntry {
    year: string;
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

/** A degree or diploma shown on the About page. */
export interface Education {
    degree: string;
    school: string;
    period: string;
    gpa: string;
    /** Says which grade it is and on what scale. */
    gpaLabel: string;
    notes: string[];
}

/** A group of technologies shown on the About page. */
export interface SkillGroup {
    title: string;
    items: string[];
}
