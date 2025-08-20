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

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`}>
        <div className="sidebar-header">
          <img
            src={darkMode ? appLogoDark : appLogoLight}
            className="sidebar-logo"
            alt="trend-tracker"
          />
          {!isCollapsed && (
            <h2 className="sidebar-title">Trend Tracker</h2>
          )}
        </div>

        <nav className="sidebar-nav">
          <a href="#new-users" className="nav-item">
            <div className="nav-icon">📊</div>
            {!isCollapsed && <span>New Users</span>}
          </a>
          <a href="#users-gained-lost" className="nav-item">
            <div className="nav-icon">📈</div>
            {!isCollapsed && <span>Users Gained & Lost</span>}
          </a>
          <a href="#analytics" className="nav-item">
            <div className="nav-icon">📋</div>
            {!isCollapsed && <span>Analytics</span>}
          </a>
          <a href="#settings" className="nav-item">
            <div className="nav-icon">⚙️</div>
            {!isCollapsed && <span>Settings</span>}
          </a>
        </nav>

        <div className="sidebar-footer">
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
      <div className="mobile-overlay" onClick={() => setIsCollapsed(true)}></div>
    </>
  );
};

export default Navigation;