import { fromJS } from 'immutable';

import {
  selectShowStringsDomain,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

describe('select ShowString state', () => {
  it('should select the ShowString state', () => {
    const homeState = fromJS({
      strings: [],
      loading: true,
      error: '',
    });
    const mockedState = fromJS({
      showStrings: homeState,
    });
    expect(selectShowStringsDomain(mockedState)).toEqual(homeState);
  });

  // describe('makeSelectAllStrings', () => {
  //   const allStrings = makeSelectAllStrings();

  //   it('should select the strings from state', () => {
  //     const strings = [{ id: 1, data: 'hi' }, { id: 2, data: 'hello' }];
  //     const mockedState = fromJS({
  //       showStrings: {
  //         strings,
  //       },
  //     });

  //     expect(allStrings(mockedState)).toEqual(strings);
  //   });
  // });
  describe('makeSelectloading', () => {
    const loadingSelector = makeSelectLoading();

    it('should select the loading from state', () => {
      const loadingValue = true;
      const mockedState = fromJS({
        showStrings: {
          loading: loadingValue,
        },
      });

      expect(loadingSelector(mockedState)).toEqual(loadingValue);
    });
  });
  describe('makeSelectError', () => {
    const errorSelector = makeSelectError();

    it('should select the error from state', () => {
      const error = 'No connection to database';
      const mockedState = fromJS({
        showStrings: {
          error,
        },
      });

      expect(errorSelector(mockedState)).toEqual(error);
    });
  });
});
