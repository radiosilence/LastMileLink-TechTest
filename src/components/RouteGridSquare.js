import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

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

  handleClick = (event) => {
    const {
      row,
      column,
      gridsterActionCreators: { toggleClear },
    } = this.props;
    event.preventDefault();
    toggleClear(row, column);
  }

  square() {
    const {
      gridster: { grid },
      row,
      column,
    } = this.props;

    return grid.getIn([row, column]);
  }

  classes() {
    const { isStart, isClear, isRoute, isEnd } = this.square();

    return cx('route-grid-square', {
      clear: isClear,
      start: isStart,
      end: isEnd,
      route: isRoute,
    });
  }

  render() {
    return (
      <a href="" onClick={this.handleClick} className={this.classes()}>{' '}</a>
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

