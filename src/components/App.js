import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../../assets/Gridster-Logo.png';

import Controls from './Controls';
import RouteGrid from './RouteGrid';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <img src={logo} />
          </Col>
        </Row>
        <Controls />
        <RouteGrid />
      </Grid>
    );
  }
}

export default App;
