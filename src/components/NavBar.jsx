import PropTypes from 'prop-types';
import { useState } from 'react';

const NavBar = ({ setSelectedSection }) => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section);
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Academic Achievements', 'Contact'];

  return (
    <nav className="bg-dark-navbar">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="h-16 flex items-center justify-between">
          <span className="text-dark-text font-bold text-lg sm:text-xl">Portfolio</span>
          
          {/* Hamburger Button */}
          <button 
            className="sm:hidden text-dark-text hover:text-dark-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex sm:space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeSection === item 
                      ? 'bg-dark-accent text-dark-text' 
                      : 'text-dark-muted hover:text-dark-text hover:bg-dark-hover'
                    }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col space-y-2 px-2 pt-2 pb-3 bg-dark-navbar">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${activeSection === item 
                        ? 'bg-dark-accent text-dark-text' 
                        : 'text-dark-muted hover:text-dark-text hover:bg-dark-hover'
                      }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
};

export default NavBar;
