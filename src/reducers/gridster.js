import I from 'immutable';
import ActionTypes from '../constants/actionTypes';

function sanitizeNum(num) {
  return Math.max(0, Math.min(num, 20));
}

function compareCoords(a, b) {
  return a.row === b.row && a.column === b.column;
}

function getRandomCoords(rows, columns) {
  return {
    row: Math.floor(Math.random() * rows),
    column: Math.floor(Math.random() * columns),
  };
}

function generateGrid(rows, columns) {
  const start = getRandomCoords(rows, columns);
  let end;
  do {
    end = getRandomCoords(rows, columns);
  } while (end === undefined || compareCoords(start, end));

  return I.Range(0, rows)
    .map(row => I.Range(0, columns)
      .map(column => I.Map({
        isStart: row === start.row && column === start.column,
        isEnd: row === end.row && column === end.column,
        isClear: false,
      })));
}

const initRows = 5;
const initColumns = 5;

const initialState = I.fromJS({
  inputs: {
    rows: initRows,
    columns: initColumns,
  },
  rows: initRows,
  columns: initColumns,
  cleared: [],
  grid: generateGrid(initRows, initColumns),
});

const mutations = {
  [ActionTypes.Gridster.UPDATE_ROWS]: (state, { num }) => state
    .setIn(['inputs', 'rows'], sanitizeNum(num)),
  [ActionTypes.Gridster.UPDATE_COLUMNS]: (state, { num }) => state
    .setIn(['inputs', 'columns'], sanitizeNum(num)),
  [ActionTypes.Gridster.GENERATE]: (state) => state
    .withMutations(prevState => {
      const { inputs: { rows, columns } } = prevState;
      prevState
        .set('rows', rows)
        .set('columns', columns)
        .set('grid', generateGrid(rows, columns));
    }),
};

export default function gridster(state, action) {
  if (typeof state === 'undefined') return initialState;
  const nextState = (mutations[action.type] || (s => s))(state, action);
  console.log('nextState', nextState.toJS());
  return nextState;
}
