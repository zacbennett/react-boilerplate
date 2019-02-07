import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addString state domain
 */

const selectAddStringDomain = state => state.get('addString', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddString
 */

const makeSelectAddString = () =>
  createSelector(selectAddStringDomain, substate => substate.toJS());

const AddString = () =>
  createSelector(selectAddStringDomain, substate => substate.get('strings'));

export default makeSelectAddString;
export { selectAddStringDomain, AddString };
