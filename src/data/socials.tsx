import { Github, Instagram, Mail, Linkedin } from 'lucide-react';
import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
    {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/LuisAbrantes'
    },
    {
        icon: <Instagram size={20} />,
        label: 'Instagram',
        url: 'https://instagram.com/luis.hsa'
    },
    {
        icon: <Mail size={20} />,
        label: 'Email',
        url: 'mailto:luis.hsa@gmail.com'
    },
    {
        icon: <Linkedin size={20} />,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/luishenriqueabrantes/'
    }
];

export const CONTACT_EMAIL = 'luis.hsa@gmail.com';
