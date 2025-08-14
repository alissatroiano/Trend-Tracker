import React, { useState, useEffect } from 'react';
import appLogo from '/yellow.png';
import './Navigation.css';

const Navigation: React.FC = () => {
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
          <div className="hamburger-menu">
            <button 
              onClick={() => {
                console.log('Hamburger clicked, isOpen:', !isOpen);
                setIsOpen(!isOpen);
              }}
              className="hamburger-icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <ul className='nav-list'>
            <li className='logo-img'>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors nav-link">
                <img src={appLogo} className="nav-logo" alt="trend-tracker" />
              </a>
            </li>
            <li className='nav-item'>
              <a href="#new-users" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors nav-link">
                New Users
              </a>
            </li>
            <li className='nav-item'>
              <a href="#users-gained-lost" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors  nav-link">
                Users Gained & Lost
              </a>
            </li>
          </ul>
        </div>
        
        {isOpen && (
          <div className="mobile-dropdown block">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-30">
              <li>
                <a href="#new-users" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  New Users
                </a>
              </li>
              <li>
                <a href="#users-gained-lost" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Users Gained & Lost
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;