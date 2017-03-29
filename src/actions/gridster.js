import ActionTypes from '../constants/actionTypes';

export function testy(arg) {
  return {
    type: ActionTypes.Gridster.TESTY,
    arg,
  };
}
