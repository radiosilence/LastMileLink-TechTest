import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';


import actions from '../actions';

class Controls extends Component {
  render() {
    const { gridsterActionCreators } = this.props;
    return (
      <Row>
        <Col md={4}>
          controls
          <button onClick={e => {
            e.preventDefault();
            gridsterActionCreators.testy('potaot');
          }}>HI</button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  gridster: state.gridster,
});

const mapDispatchToProps = (dispatch) => ({
  gridsterActionCreators: bindActionCreators(actions.gridster, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
