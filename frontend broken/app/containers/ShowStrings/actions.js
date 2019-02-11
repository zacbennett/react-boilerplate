/*
 *
 * ShowStrings actions
 *
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';


export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}
export function loadStringsSuccess(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}
export function loadStringsError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
