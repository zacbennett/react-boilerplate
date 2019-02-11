/*
 * AddString Reducer
 *
 */
import { fromJS } from 'immutable';

import {
  CHANGE_STRING,
  UPLOAD_STRING,
  UPLOAD_STRING_SUCCESS,
  UPLOAD_STRING_ERROR,
  CLEAR_SUCCESS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  string: '',
  loading: false,
  successMsg: '',
  errorMsg: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('string', action.string);
    case UPLOAD_STRING:
      return state.set('loading', true);
    case UPLOAD_STRING_SUCCESS:
      return state
        .set('loading', false)
        .set('successMsg', 'String saved to database!')
        .set('string', '');
    case UPLOAD_STRING_ERROR:
      return state
        .set('loading', false)
        .set('successMsg', '')
        .set('error', `There was an error!: ${action.error}`);
    case CLEAR_SUCCESS_ERROR:
      return state.set('successMsg', '').set('errorMsg', '');
    default:
      return state;
  }
}

export default homeReducer;
