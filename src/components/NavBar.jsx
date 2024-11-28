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
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-white font-bold text-xl">Portfolio</span>
          <ul className="flex space-x-4 sm:space-x-8">
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
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setSelectedSection: PropTypes.func.isRequired,
};

export default NavBar;
