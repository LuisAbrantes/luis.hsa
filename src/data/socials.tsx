import { Github, Instagram, Mail, Linkedin, Hexagon } from 'lucide-react';
import type { SocialLink } from '@/types';

export const CONTACT_EMAIL = 'luis.hsa@gmail.com';

/** Profiles in the order a hiring manager is most likely to want them. */
export const socialLinks: SocialLink[] = [
    {
        icon: <Linkedin size={20} />,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/luishenriqueabrantes/'
    },
    {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/LuisAbrantes'
    },
    {
        icon: <Hexagon size={20} />,
        label: 'Devpost',
        url: 'https://devpost.com/LuisAbrantes'
    },
    {
        icon: <Instagram size={20} />,
        label: 'Instagram',
        url: 'https://instagram.com/luis.hsa'
    },
    {
        icon: <Mail size={20} />,
        label: 'Email',
        url: `mailto:${CONTACT_EMAIL}`
    }
];
