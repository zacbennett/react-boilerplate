/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectString } from 'containers/HomePage/selectors';
import { uploadStringSuccess, uploadStringError } from './actions';

import { UPLOAD_STRING } from './constants';
/**
 * Github repos request/response handler
 */
export function* saveString() {
  const string = yield select(makeSelectString());
  // TODO, error handling
  // if (string === '') {
  //   yield put(uploadStringError(err));
  // }
  const requestURL = `http://localhost:3001/strings`;
  // not pass the string into the request, whhhyy?

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
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(UPLOAD_STRING, saveString);
}
