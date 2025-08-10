import { useState } from 'react'
import appLogo from '/trend-tracker.png'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="img-wrapper">
              <img src={appLogo} className="logo" alt="trend-tracker" />
            </div>
          </Col>
        </Row>
        <Row className='d-flex flex-row justify-content-center'>
          <Col className='col-12 col-sm-6 flex-col'>
            <div className='card'>
              <div className='card-header'>
                <h1 className='display-3'>New Users</h1>
              </div>
              <div className='card-body'>
                <p >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              </div>
            </div>
          </Col>
          <Col className='col-12 col-sm-6 flex-col'>
            <div className='card'>
              <div className='card-header'>
                <h1 className='display-3'>New Users</h1>
              </div>
              <div className='card-body'>
                           <p >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default App
