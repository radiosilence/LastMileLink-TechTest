import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import actions from '../actions';


class RouteGridSquare extends Component {
  static propTypes = {
    gridster: PropTypes.instanceOf(I.Map),
    gridsterActionCreators: PropTypes.object.isRequired,
    row: PropTypes.number,
    column: PropTypes.number,
  };

  render() {
    return (
      <div className="route-grid-square">
        {this.props.row}, {this.props.column}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gridster: state.gridster,
});

const mapDispatchToProps = (dispatch) => ({
  gridsterActionCreators: bindActionCreators(actions.gridster, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(RouteGridSquare);

