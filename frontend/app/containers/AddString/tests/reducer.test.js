import { fromJS } from 'immutable';
import addStringReducer from '../reducer';

describe('addStringReducer', () => {
  it('returns the initial state', () => {
    expect(addStringReducer(undefined, {})).toEqual(fromJS({}));
  });
});
