import { fromJS } from 'immutable';
import showStringsReducer from '../reducer';

describe('showStringsReducer', () => {
  it('returns the initial state', () => {
    expect(showStringsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
