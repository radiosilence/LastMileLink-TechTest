import I from 'immutable';
import ActionTypes from '../constants/actionTypes';

function sanitizeNum(num) {
  return Math.max(0, Math.min(num, 20));
}

const initialState = I.fromJS({
  inputs: {
    rows: 5,
    columns: 5,
  },
  rows: 5,
  columns: 5,
  cleared: [],
  start: undefined,
  end: undefined,
});

const mutations = {
  [ActionTypes.Gridster.UPDATE_ROWS]: (state, { num }) =>
    state.setIn(['inputs', 'rows'], sanitizeNum(num)),
  [ActionTypes.Gridster.UPDATE_COLUMNS]: (state, { num }) =>
    state.setIn(['inputs', 'columns'], sanitizeNum(num)),
};

export default function gridster(state, action) {
  if (typeof state === 'undefined') return initialState;
  return (mutations[action.type] || (s => s))(state, action);
}
