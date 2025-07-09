import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/achievements', label: 'Academic Achievements' },
        { to: '/contact', label: 'Contact' }
    ];

    const navLinkClasses = ({ isActive }) =>
        `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md ${
            isActive
                ? 'bg-dark-accent text-dark-text shadow-purple-glow border border-dark-purpleGlassBorder'
                : 'text-dark-muted hover:text-dark-text hover:bg-dark-glassHover hover:backdrop-blur-lg hover:border-dark-glassBorder border border-transparent'
        }`;

    const mobileNavLinkClasses = ({ isActive }) =>
        `w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md ${
            isActive
                ? 'bg-dark-accent text-dark-text shadow-purple-glow border border-dark-purpleGlassBorder'
                : 'text-dark-muted hover:text-dark-text hover:bg-dark-glassHover hover:backdrop-blur-lg hover:border-dark-glassBorder border border-transparent'
        }`;

    return (
        <nav className="bg-dark-glass backdrop-blur-xl border-b border-dark-glassBorder sticky top-0 z-50 shadow-glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-dark-accent to-dark-accentHover rounded-lg animate-pulse-glow"></div>
                        <span className="text-dark-text font-bold text-lg sm:text-xl bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="sm:hidden text-dark-text hover:text-dark-accent p-2 rounded-lg hover:bg-dark-glassHover backdrop-blur-md transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden sm:flex sm:space-x-2">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    className={navLinkClasses}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden animate-slideUp">
                        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-2xl m-4 p-4 shadow-glass">
                            <ul className="flex flex-col space-y-2">
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
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
