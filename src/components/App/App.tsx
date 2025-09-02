import React, { useState, useEffect } from 'react'
import './App.css'
import NewUserChart from '../NewUserChart/NewUserChart';
import ComparisonChart from '../ComparisonChart/ComparisonChart.tsx';
import Navigation from '../Navigation/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Pass darkMode + setter down so Nav can render a toggle button */}
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="dashboard-container">
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1 className="dashboard-title">User Analytics Dashboard</h1>
            <p className="dashboard-subtitle">Monitor your user metrics and growth trends</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card" id="new-users">
              <div className="card-header">
                <h2 className="card-title">New Users</h2>
                <div className="card-badge">Daily</div>
              </div>
              <div className="card-content">
                <NewUserChart darkMode={darkMode} lightMode={!darkMode} />
              </div>
            </div>

            <div className="dashboard-card" id="users-gained-lost">
              <div className="card-header">
                <h2 className="card-title">Users Gained & Lost</h2>
                <div className="card-badge">Trend</div>
              </div>
              <div className="card-content">
                <ComparisonChart darkMode={darkMode} />
              </div>
            </div>

            <div className="dashboard-card stats-card">
              <div className="card-header">
                <h2 className="card-title">Quick Stats</h2>
              </div>
              <div className="card-content">
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">1,234</div>
                    <div className="stat-label">Total Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">+12%</div>
                    <div className="stat-label">Growth Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">89</div>
                    <div className="stat-label">Active Today</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">4.2</div>
                    <div className="stat-label">Avg. Session</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-card activity-card">
              <div className="card-header">
                <h2 className="card-title">Recent Activity</h2>
              </div>
              <div className="card-content">
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">👤</div>
                    <div className="activity-text">
                      <div className="activity-title">New user registered</div>
                      <div className="activity-time">2 minutes ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📊</div>
                    <div className="activity-text">
                      <div className="activity-title">Analytics updated</div>
                      <div className="activity-time">15 minutes ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">🎯</div>
                    <div className="activity-text">
                      <div className="activity-title">Goal achieved</div>
                      <div className="activity-time">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
