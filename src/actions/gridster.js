import ActionTypes from '../constants/actionTypes';


/**
 * Update the number of rows in the input.
 *
 * @export
 * @param {any} num
 * @returns
 */
export function updateRows(num) {
  return {
    type: ActionTypes.Gridster.UPDATE_ROWS,
    num,
  };
}


/**
 * Update the number of columns in the input.
 *
 * @export
 * @param {any} num
 * @returns
 */
export function updateColumns(num) {
  return {
    type: ActionTypes.Gridster.UPDATE_COLUMNS,
    num,
  };
}


/**
 * Generate a grid
 *
 * @export
 * @returns
 */
export function generate() {
  return {
    type: ActionTypes.Gridster.GENERATE,
  };
}


/**
 * Toggle whether a cell is "cleared"
 *
 * @export
 * @param {any} row
 * @param {any} column
 * @returns
 */
export function toggleClear(row, column) {
  return {
    type: ActionTypes.Gridster.TOGGLE_CLEAR,
    row,
    column,
  };
}
