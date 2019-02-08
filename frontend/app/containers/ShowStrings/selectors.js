import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the showStrings state domain
 */

const selectShowStringsDomain = state => state.get('showStrings', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShowStrings
 */

const makeSelectShowStrings = () =>
  createSelector(selectShowStringsDomain, substate => substate.toJS());

const makeSelectAllStrings = () =>
  createSelector(selectShowStringsDomain, homeState =>
    homeState.get('strings'),
  );

const makeSelectLoading = () =>
  createSelector(selectShowStringsDomain, homeState =>
    homeState.get('loading'),
  );

export default makeSelectShowStrings;
export { selectShowStringsDomain, makeSelectLoading, makeSelectAllStrings };
