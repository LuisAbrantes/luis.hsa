import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/navigation';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
            isActive
                ? 'text-white bg-white/10 border border-white/15'
                : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
        }`;

    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `block w-full text-left px-4 py-3 text-sm font-medium tracking-wide transition-all duration-200 border-l-2 ${
            isActive
                ? 'border-white text-white bg-white/10'
                : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#07080b]/70 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <NavLink to="/" className="flex items-center gap-2.5 group">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:shadow-[0_0_8px_#34d399] transition-all" />
                        <span className="text-white font-semibold tracking-tight text-sm sm:text-base font-sans">
                            Luis Henrique Abrantes
                        </span>
                    </NavLink>

                    {/* Hamburger Button */}
                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        className="sm:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(open => !open)}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden sm:flex sm:items-center sm:space-x-2">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <NavLink to={link.to} className={navLinkClasses}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden border-t border-white/5 bg-[#07080b]/95 backdrop-blur-2xl rounded-b-2xl pb-3 pt-1">
                        <ul className="flex flex-col space-y-1">
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className={mobileNavLinkClasses}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
