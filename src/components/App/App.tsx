import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewUserChart from '../NewUserChart/NewUserChart';
import ComparisonChart from '../ComparisonChart/ComparisonChart.tsx';
import Navigation from '../Navigation/Navigation';

function App() {

  return (
    <>
      <Navigation />
      <Container className="container app-container">
        <Row>
          <Col>
            <h1 className="app-title">User Metrics</h1>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center chart-row' id='chartRow'>
          <Col className='col-12 col-sm-6 flex-col card-col'>
            <div className='card'>
              <div className='card-header'>
                 <h2 className='display-3 chart-title'>New Users</h2>
              </div>
              <div className='card-body'>
                <NewUserChart />
              </div>
            </div>
          </Col>
          <Col className='col-12 col-sm-6 flex-col card-col'>
            <div className='card'>
              <div className='card-header'>
                <h2 className='display-3 chart-title'> Users Gained & Lost</h2>
              </div>
              <div className='card-body'>
                <ComparisonChart />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
