/**
 * Add String selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectString = () =>
  createSelector(selectHome, homeState => homeState.get('string'));

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectSuccessMsg = () =>
  createSelector(selectHome, homeState => homeState.get('successMsg'));

const makeSelectErrorMsg = () =>
  createSelector(selectHome, homeState => homeState.get('errorMsg'));

export {
  selectHome,
  makeSelectUsername,
  makeSelectString,
  makeSelectErrorMsg,
  makeSelectSuccessMsg,
};
