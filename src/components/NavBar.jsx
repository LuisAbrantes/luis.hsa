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
        `px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-gray-400 hover:text-white'
        }`;

    const mobileNavLinkClasses = ({ isActive }) =>
        `block w-full text-left px-4 py-3 text-sm font-light tracking-wide transition-colors duration-300 border-l-2 ${
            isActive
                ? 'border-white text-white bg-white/5'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full bg-dark-primary/80 backdrop-blur-md border-b border-gray-800/50 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <span className="text-white font-light tracking-wider text-lg">
                        Luis Henrique Abrantes
                    </span>

                    {/* Hamburger Button */}
                    <button
                        className="sm:hidden text-gray-400 hover:text-white transition-colors"
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
                    <ul className="hidden sm:flex sm:space-x-8">
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
                    <div className="sm:hidden border-t border-gray-800">
                        <ul className="flex flex-col py-2">
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
