import { User, Briefcase, Award, Mail } from 'lucide-react';
import type { NavCard } from '@/types';

/** Cards rendered on the Home page hero grid. */
export const navCards: NavCard[] = [
    {
        title: 'About',
        path: '/about',
        icon: User,
        description: 'Learn more about me'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: Briefcase,
        description: 'See my work'
    },
    {
        title: 'Academic Achievements',
        path: '/achievements',
        icon: Award,
        description: 'My accomplishments'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: Mail,
        description: 'Get in touch'
    }
];

/** Links rendered in the top navigation bar. */
export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/achievements', label: 'Academic Achievements' },
    { to: '/contact', label: 'Contact' }
] as const;
