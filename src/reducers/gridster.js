import I from 'immutable';
import ActionTypes from '../constants/actionTypes';

import { findShortestRoute } from '../astar';

export function updateSeq(seq, idx, fn) {
  return seq
    .map((item, itemIdx) => itemIdx === idx
      ? fn(item)
      : item,
  );
}

export function updateGridSquare(rows, row, column, fn) {
  return updateSeq(rows, row, cols => updateSeq(cols, column, fn));
}

export function updateRoute(state) {
  const { grid, start, end } = state;
  return state
    .set('route', findShortestRoute(grid, start, end));
}

export function sanitizeNum(num) {
  return Math.max(0, Math.min(num, 20));
}

export function compareCoords(a, b) {
  return a.row === b.row && a.column === b.column;
}

export function getRandomCoords(rows, columns) {
  return {
    row: Math.floor(Math.random() * rows),
    column: Math.floor(Math.random() * columns),
  };
}

export function generateGrid(rows, columns) {
  const start = getRandomCoords(rows, columns);
  let end;
  do {
    end = getRandomCoords(rows, columns);
  } while (end === undefined || compareCoords(start, end));

  return {
    grid: I.fromJS(I.Range(0, rows)
      .map(row => I.Range(0, columns)
        .map(column => I.Map({
          isStart: row === start.row && column === start.column,
          isEnd: row === end.row && column === end.column,
          isClear: false,
        })))),
    start,
    end,
  };
}

const initRows = 10;
const initColumns = 10;

const {
  grid: initialGrid,
  start: initialStart,
  end: initialEnd,
} = generateGrid(initRows, initColumns);

const initialState = I.fromJS({
  inputs: {
    rows: initRows,
    columns: initColumns,
  },
  rows: initRows,
  columns: initColumns,
  cleared: [],
  grid: initialGrid,
  start: initialStart,
  end: initialEnd,
  route: {},
});

const mutations = {
  [ActionTypes.Gridster.UPDATE_ROWS]: (state, { num }) => state
    .setIn(['inputs', 'rows'], sanitizeNum(num)),

  [ActionTypes.Gridster.UPDATE_COLUMNS]: (state, { num }) => state
    .setIn(['inputs', 'columns'], sanitizeNum(num)),

  [ActionTypes.Gridster.GENERATE]: (state) => {
    const { inputs: { rows, columns } } = state;
    const { grid, start, end } = generateGrid(rows, columns);

    return updateRoute(state
      .merge({
        rows,
        columns,
        grid,
        start,
        end,
      }));
  },

  [ActionTypes.Gridster.TOGGLE_CLEAR]: (state, { row, column }) => {
    const nextState = state
      .update('grid', grid => updateGridSquare(grid, row, column, square => square
        .update('isClear', isClear => !isClear)));
    return updateRoute(nextState);
  },
};

export default function gridster(state, action) {
  if (typeof state === 'undefined') return initialState;
  const nextState = (mutations[action.type] || (s => s))(state, action);
  return nextState;
}
