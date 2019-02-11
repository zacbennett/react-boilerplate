import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      strings: [],
      loading: true,
      error: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadString action correctly', () => {
    const expectedResult = state;
    expect(homeReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the loadStringSuccess action correctly', () => {
    const strings = [{ id: 1, data: 'hi' }, { id: 2, data: 'hello' }];

    const expectedResult = state
      .set('strings', strings)
      .set('loading', false)
      .set('error', '');

    expect(homeReducer(state, loadStringsSuccess(strings))).toEqual(
      expectedResult,
    );
  });

  // it('should handle the loadString action correctly', () => {
  //   const fixture = 'mxstbr';
  //   const expectedResult = state.set('username', fixture);

  //   expect(homeReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  // });
});
