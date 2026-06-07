import { Cpu, Star } from 'lucide-react';
import type { GithubAchievement } from '@/types';
import pullShark from '@/assets/about/pullsharkbronze.png';
import arcticVault from '@/assets/about/articcodevault.png';
import yolo from '@/assets/about/yolo.png';
import starTruck from '@/assets/about/startruck.png';
import quickdraw from '@/assets/about/quickdraw.png';

/**
 * GitHub achievements shown on the About page.
 * Entries with `image` render as badge thumbnails; entries with `icon`
 * render in the highlights list.
 */
export const githubAchievements: GithubAchievement[] = [
    {
        id: 1,
        name: 'Pull Shark',
        image: pullShark,
        description: 'Created numerous accepted pull requests'
    },
    {
        id: 2,
        name: 'Arctic Code Vault',
        image: arcticVault,
        description: 'Contributed code to the Arctic Code Vault'
    },
    {
        id: 3,
        name: 'YOLO',
        image: yolo,
        description: 'Merged without review'
    },
    {
        id: 4,
        name: 'Starstruck',
        image: starTruck,
        description: 'Created a repository that earned stars'
    },
    {
        id: 7,
        name: 'Quickdraw',
        image: quickdraw,
        description: 'Completed a pull request review in record time'
    },
    {
        id: 5,
        name: 'Developer Program Member',
        icon: <Cpu className="w-6 h-6 text-gray-400" />,
        description: 'Member of the GitHub Developer Program'
    },
    {
        id: 6,
        name: 'PRO',
        icon: (
            <div className="relative w-6 h-6 flex items-center justify-center">
                <Star className="w-6 h-6 text-gray-400" />
            </div>
        ),
        description: 'GitHub PRO Member'
    }
];

/** Achievements rendered as image badges (top of the About sidebar). */
export const badgeAchievements = githubAchievements.filter(a => a.image);

/** Achievements rendered as icon rows (bottom of the About sidebar). */
export const highlightAchievements = githubAchievements.filter(a => a.icon);
