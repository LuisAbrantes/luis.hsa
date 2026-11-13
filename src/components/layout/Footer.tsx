import { Link } from 'react-router';
import { navLinks } from '@/data/navigation';
import { socialLinks } from '@/data/socials';
import { PAPERS_URL, PERSON } from '@/data/site';

/**
 * Site footer: internal links for crawlability plus `rel="me"` profile links,
 * which tie this domain to the same identity on other platforms.
 */
const Footer = () => (
    <footer className="bg-[#07080b] border-t border-zinc-800/80 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-1.5">
                <p className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {PERSON.name}
                </p>
                <p className="text-xs font-mono text-zinc-500">
                    {PERSON.jobTitle}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
                <ul
                    aria-label="Site pages"
                    className="flex flex-wrap gap-x-6 gap-y-2"
                >
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={PAPERS_URL}
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            Papers
                        </a>
                    </li>
                </ul>

                <ul
                    aria-label="Profiles"
                    className="flex flex-wrap gap-x-6 gap-y-2"
                >
                    {socialLinks.map(social => (
                        <li key={social.label}>
                            <a
                                href={social.url}
                                rel="me noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
