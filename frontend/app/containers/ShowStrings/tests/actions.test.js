import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('ShowStrings actions', () => {
  describe('load Strings action', () => {
    it('has a type of LOAD_STRINGS', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });
  describe('load strings success action', () => {
    it('has a type of LOAD_STRINGS_SUCCESS and strings', () => {
      const strings = [{ id: 1, data: 'hi' }];
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
        strings,
      };
      expect(loadStringsSuccess(strings)).toEqual(expected);
    });
  });
  describe('laod strings error Action', () => {
    it('has a type of LOAD_STRINGS_ERROR and error message', () => {
      const error = 'No empty strings!';
      const expected = {
        type: LOAD_STRINGS_ERROR,
        error,
      };
      expect(loadStringsError(error)).toEqual(expected);
    });
  });
});
