/*
 *
 * ShowStrings actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

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
export function loadStringsError() {
  return {
    type: LOAD_STRINGS_ERROR,
  };
}
