import ActionTypes from '../constants/actionTypes';

export function updateRows(num) {
  return {
    type: ActionTypes.Gridster.UPDATE_ROWS,
    num,
  };
}

export function updateColumns(num) {
  return {
    type: ActionTypes.Gridster.UPDATE_COLUMNS,
    num,
  };
}

export function generate() {
  return {
    type: ActionTypes.Gridster.GENERATE,
  };
}

export function toggleClear(row, column) {
  return {
    type: ActionTypes.Gridster.TOGGLE_CLEAR,
    row,
    column,
  };
}
