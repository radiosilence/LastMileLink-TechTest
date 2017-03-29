import I from 'immutable';
import ActionTypes from '../constants/actionTypes';

const mutations = {
  [ActionTypes.Gridster.TESTY]: (action, state) => state.set('testy', action.arg),
};

export default function gridster(state, action) {
  if (typeof state === 'undefined') return I.Map();
  console.log('action', action);
  console.log('state', state);
  return mutations[action.type](action, state) || state;
}
