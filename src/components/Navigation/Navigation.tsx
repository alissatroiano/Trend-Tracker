import React, { useState, useEffect } from 'react';
import appLogoDark from '/tt-dark.png';
import appLogoLight from '/tt-light.png';
import './Navigation.css';

type NavProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation: React.FC<NavProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-purple-500 border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Hamburger for mobile */}
          <div className="hamburger-menu">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Desktop nav list */}
          <ul className='nav-list flex items-center gap-4'>
            <li className='logo-img'>
              <a href="#" className="nav-link">
                <img
                  src={darkMode ? appLogoDark : appLogoLight}
                  className="nav-logo"
                  alt="trend-tracker"
                />
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#new-users"
                className={`nav-link ${darkMode ? "text-yellow-400" : "text-gray-800"}`}
              >
                New Users
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#users-gained-lost"
                className={`nav-link ${darkMode ? "text-yellow-400" : "text-gray-800"}`}
              >
                Users Gained & Lost
              </a>
            </li>
            {/* Dark mode toggle button */}
          <li className="mr-4 dark-mode-toggle">
  <button
    id="darkModeToggle"
    onClick={() => setDarkMode(!darkMode)}
    className="dark-mode-button"
  >
    <img className='img img-fluid toggle-modes'
      src={darkMode ? "/light-mode.png" : "/dark-mode.png"}
      alt="toggle dark mode"
    />
  </button>
</li>
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="mobile-dropdown block">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-30">
              <li>
                <a href="#new-users" className="block px-3 py-2 rounded-md text-base font-medium">New Users</a>
              </li>
              <li>
                <a href="#users-gained-lost" className="block px-3 py-2 rounded-md text-base font-medium">Users Gained & Lost</a>
              </li>
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
