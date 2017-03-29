import React, { Component } from 'react';
import I from 'immutable';

import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';

import RouteGridRow from './RouteGridRow';


/**
 * The actual visual grid display.
 *
 * @class RouteGrid
 * @extends {Component}
 */
class RouteGrid extends Component {
  shouldComponentUpdate(nextProps) {
    return !I.is(this.props.gridster, nextProps.gridster);
  }

  rowNodes() {
    const { gridster: { rows, columns } } = this.props;
    return new I.Range(0, rows)
      .map((_, idx) => <RouteGridRow key={idx} idx={idx} columns={columns} />
    );
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <div className="route-grid">
            {this.rowNodes()}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RouteGrid);
