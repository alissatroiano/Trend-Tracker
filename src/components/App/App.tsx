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
                    <div className="stat-value">49</div>
                    <div className="stat-label">Total New Users (10 days)</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">+6</div>
                    <div className="stat-label">Net Growth</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">13</div>
                    <div className="stat-label">Peak Day</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">4.9</div>
                    <div className="stat-label">Daily Average</div>
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
                    <div className="activity-icon">📈</div>
                    <div className="activity-text">
                      <div className="activity-title">Peak day: 13 new users registered</div>
                      <div className="activity-time">Yesterday</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📉</div>
                    <div className="activity-text">
                      <div className="activity-title">3 users lost today</div>
                      <div className="activity-time">2 hours ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">⚡</div>
                    <div className="activity-text">
                      <div className="activity-title">7 users gained in latest period</div>
                      <div className="activity-time">4 hours ago</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📊</div>
                    <div className="activity-text">
                      <div className="activity-title">10-day trend analysis complete</div>
                      <div className="activity-time">6 hours ago</div>
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
