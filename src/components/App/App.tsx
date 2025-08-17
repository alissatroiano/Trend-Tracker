import React, { useState, useEffect } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewUserChart from '../NewUserChart/NewUserChart';
import ComparisonChart from '../ComparisonChart/ComparisonChart.tsx';
import Navigation from '../Navigation/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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

      <Container className="container app-container">
        <Row>
          <Col>
            <h1 className="app-title text-gray-900 dark:text-gray-100">
              User Metrics</h1>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center chart-row' id='chartRow'>
          <Col className='col-12 col-sm-6 flex-col card-col' id='new-users'>
            <div className='card'>
              <div className='card-header'>
                <h2 className='display-3 chart-title'>New Users</h2>
              </div>
              <div className='card-body'>
               <NewUserChart darkMode={darkMode} lightMode={!darkMode} />
              </div>
            </div>
          </Col>
          <Col className='col-12 col-sm-6 flex-col card-col' id='users-gained-lost'>
            <div className='card'>
              <div className='card-header'>
                <h2 className='display-3 chart-title'>Users Gained & Lost</h2>
              </div>
              <div className='card-body'>
            <ComparisonChart darkMode={darkMode} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
