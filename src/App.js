import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HookDemo from './components/hooks-demo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={12}><h1>Hook Demo</h1></Col>
            <Col sm={12}><HookDemo /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
