import React from 'react';

const NavBar = ({ setSelectedSection }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <button
            className="text-white"
            onClick={() => setSelectedSection('Home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="text-white"
            onClick={() => setSelectedSection('About')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="text-white"
            onClick={() => setSelectedSection('Projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="text-white"
            onClick={() => setSelectedSection('Certificates')}
          >
            Certificates
          </button>
        </li>
        <li>
          <button
            className="text-white"
            onClick={() => setSelectedSection('Contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
