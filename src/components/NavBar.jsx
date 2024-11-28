import { useState } from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ setSelectedSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section);
    setIsOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Certificates', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${activeSection === item 
                        ? 'text-white bg-gray-700' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${activeSection === item 
                      ? 'text-white bg-gray-700' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
};

export default NavBar;
