import { useState } from 'react'
import appLogo from '/trend-tracker.png'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewUserChart from '../NewUserChart/NewUserChart';
import ComparisonChart from '../ComparisonChart/ComparisonChart.tsx';

function App() {

  return (
    <>
      <Container className="container-fluid app-container">
        <Row>
          <Col>
            <div className="img-wrapper">
              <img src={appLogo} className="logo" alt="trend-tracker" />
            </div>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center chart-row'>
          <Col className='col-12 col-sm-6 flex-col card-col'>
            <div className='card'>
              <div className='card-header'>
                 <h2 className='display-3'>New Users</h2>
              </div>
              <div className='card-body'>
                <NewUserChart />
              </div>
            </div>
          </Col>
          <Col className='col-12 col-sm-6 flex-col card-col'>
            <div className='card'>
              <div className='card-header'>
                <h2 className='display-3'> Users Gained & Lost</h2>
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
