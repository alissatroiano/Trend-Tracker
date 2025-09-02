import React, { useState } from 'react';
import appLogoDark from '/tt-dark.png';
import appLogoLight from '/tt-light.png';
import './Navigation.css';

type NavProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation: React.FC<NavProps> = ({ darkMode, setDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className={`mobile-menu-button ${darkMode ? 'dark' : 'light'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''} ${darkMode ? 'dark' : 'light'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Trend Tracker</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="#new-users" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="nav-icon">📊</div>
            {!isCollapsed && <span>New Users</span>}
          </a>
          <a href="#users-gained-lost" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="nav-icon">📈</div>
            {!isCollapsed && <span>Users Gained & Lost</span>}
          </a>
          <a href="#analytics" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="nav-icon">📋</div>
            {!isCollapsed && <span>Analytics</span>}
          </a>
          <a href="#settings" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="nav-icon">⚙️</div>
            {!isCollapsed && <span>Settings</span>}
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="profile-section">
            <div className="profile-avatar">
              <img 
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" 
                alt="Profile" 
                className="avatar-image"
              />
            </div>
            {!isCollapsed && (
              <div className="profile-info">
                <div className="profile-name">John Doe</div>
                <div className="profile-role">Admin</div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className="nav-icon">{darkMode ? '☀️' : '🌙'}</div>
            {!isCollapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="collapse-toggle"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <div className="nav-icon">{isCollapsed ? '→' : '←'}</div>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navigation;