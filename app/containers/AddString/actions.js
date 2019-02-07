/*
 *
 * AddString actions
 *
 */

import { DEFAULT_ACTION, ADD_STRING } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function addString(data) {
  return {
    type: ADD_STRING,
    data,
  };
}
