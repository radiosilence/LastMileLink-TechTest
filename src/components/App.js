import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Controls from './Controls';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            Header
          </Col>
        </Row>
        <Controls />
      </Grid>
    );
  }
}

export default App;
