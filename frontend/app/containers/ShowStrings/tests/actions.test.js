import { loadStrings, loadStringsSuccess, loadStringsError } from './actions';
import {
  DEFAULT_ACTION,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

describe('ShowStrings actions', () => {
  describe('load Strings', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});


// import { CHANGE_USERNAME } from '../constants';

// import { changeUsername } from '../actions';

// describe('Home Actions', () => {
//   describe('changeUsername', () => {
//     it('should return the correct type and the passed name', () => {
//       const fixture = 'Max';
//       const expectedResult = {
//         type: CHANGE_USERNAME,
//         name: fixture,
//       };

//       expect(changeUsername(fixture)).toEqual(expectedResult);
//     });
//   });
// });
