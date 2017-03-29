import React, { Component, PropTypes } from 'react';
import I from 'immutable';

import RouteGridSquare from './RouteGridSquare';

class RouteGridRow extends Component {
  static propTypes = {
    idx: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
  };

  squareNodes() {
    const { idx, columns } = this.props;
    return I.Range(0, columns)
      .map((_, columnIdx) =>
        <RouteGridSquare row={idx} column={columnIdx} />
      );
  }

  render() {
    return (
      <div className="route-grid-row">
        {this.squareNodes()}
      </div>
    );
  }
}

export default RouteGridRow;