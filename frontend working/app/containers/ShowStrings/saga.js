import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { loadStringsSuccess, loadStringsError } from './actions';

import { LOAD_STRINGS } from './constants';

// Individual exports for testing
export function* getStrings() {
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(loadStringsSuccess(strings));
  } catch (err) {
    yield put(loadStringsError(err));
  }
}

export default function* makeAPICallForStrings() {
  // waits for loadstrings to be called, and then calls getStrings
  yield takeLatest(LOAD_STRINGS, getStrings);
}
