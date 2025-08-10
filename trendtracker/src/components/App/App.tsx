import { useState } from 'react'
import appLogo from '/logo.png'
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
              <img src={appLogo} className="logo" alt="trend-tracker" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Trend Tracker</h1>
          </Col>
          <Col>
            <div className="card">
             
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
