import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** A portfolio project shown on the /projects page. */
export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    /** Imported asset URL used in the modal hero. */
    image: string;
    /** Imported asset URL used in the card thumbnail. */
    thumbnail: string;
    technologies: string[];
    category: ProjectCategory;
    github: string;
    demo?: string;
    devpost?: string;
    youtube?: string;
    slides?: string;
    highlights: string[];
}

export type ProjectCategory =
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
