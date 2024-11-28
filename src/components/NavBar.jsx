import PropTypes from 'prop-types';
import { useState } from 'react';

const NavBar = ({ setSelectedSection }) => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section);
  };

  const navItems = ['Home', 'About', 'Projects', 'Certificates', 'Contact'];

  return (
    <nav className="bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-dark-text font-bold text-xl">Portfolio</span>
          <ul className="flex space-x-4 sm:space-x-8">
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
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
};

export default NavBar;
