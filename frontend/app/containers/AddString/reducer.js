/*
 *
 * AddString reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, ADD_STRING } from './constants';

export const initialState = fromJS({
  strings: '',
});

function addStringReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ADD_STRING:
      return state.set('strings', action.data);
    default:
      return state;
  }
}

export default addStringReducer;
