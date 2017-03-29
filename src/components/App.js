import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../../assets/Gridster-Logo.png';

import Controls from './Controls';
import RouteGrid from './RouteGrid';

/**
 * Wrapper for everything.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <img className="logo" src={logo} />
          </Col>
        </Row>
        <Controls />
        <RouteGrid />
      </Grid>
    );
  }
}

export default App;
