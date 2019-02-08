/*
 *
 * ShowStrings reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';
export const initialState = fromJS({
  strings: [],
  loading: true,
  error: '',
});

function showStringsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_STRINGS:
      return state.set('loading', true);
    case LOAD_STRINGS_ERROR:
      return state.set('loading', false).set('error', 'There was an error!');
    case LOAD_STRINGS_SUCCESS:
      console.log('omg look i made it', action.strings);
      return state.set('loading', false).set('strings', action.strings);
    default:
      return state;
  }
}

export default showStringsReducer;
