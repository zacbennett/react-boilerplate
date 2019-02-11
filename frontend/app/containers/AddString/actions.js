/*
 * AddString Actions
 *
 */

import {
  CHANGE_STRING,
  UPLOAD_STRING,
  UPLOAD_STRING_SUCCESS,
  UPLOAD_STRING_ERROR,
  CLEAR_SUCCESS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}
export function clearSuccessError() {
  return {
    type: CLEAR_SUCCESS_ERROR,
  };
}
export function uploadString() {
  return {
    type: UPLOAD_STRING,
  };
}
export function uploadStringSuccess() {
  return {
    type: UPLOAD_STRING_SUCCESS,
  };
}
export function uploadStringError(error) {
  return {
    type: UPLOAD_STRING_ERROR,
    error,
  };
}
