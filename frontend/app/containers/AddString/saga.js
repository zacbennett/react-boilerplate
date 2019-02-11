/**
 * Gets the strings from backend
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectString } from 'containers/AddString/selectors';
import { uploadStringSuccess, uploadStringError } from './actions';

import { UPLOAD_STRING } from './constants';
/**
 * String request/response handler
 */
export function* saveString() {
  const string = yield select(makeSelectString());
  const requestURL = `http://localhost:3001/strings`;

  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: string,
    }),
  };
  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, data);
    yield put(uploadStringSuccess());
  } catch (err) {
    yield put(uploadStringError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchUploadString() {
  // Watches for UPLOAD_STRING actions and calls saveString when one comes in.
  yield takeLatest(UPLOAD_STRING, saveString);
}
