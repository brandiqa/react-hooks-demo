import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountdownClass from './components/countdown-class'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={12}><h1>Countdown Class Example</h1></Col>
            <Col sm={12}><CountdownClass date="March 17, 2019" /></Col>
          </Row>
          <Row>
            <Col sm={12}><h1>Countdown Hook Example</h1></Col>
            <Col sm={12}><p>Todo</p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
