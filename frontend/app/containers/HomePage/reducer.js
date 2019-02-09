/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_STRING,
  UPLOAD_STRING,
  UPLOAD_STRING_SUCCESS,
  UPLOAD_STRING_ERROR,
} from './constants';
// import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = fromJS({
  // username: '',
  string: '',
  loading: false,
  successMsg: '',
  errorMsg: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('string', action.string);
    // case CHANGE_USERNAME:
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
        .set('error', 'There was an error!');
    default:
      return state;
  }
}

export default homeReducer;
