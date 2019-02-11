import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { loadStringsSuccess, loadStringsError } from './actions';

import { LOAD_STRINGS } from './constants';

// Individual exports for testing
export function* getStrings() {
  // See example in containers/HomePage/saga.js
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    console.log('in saga', strings);
    yield put(loadStringsSuccess(strings));
  } catch (err) {
    yield put(loadStringsError(err));
  }
}

export default function* makeAPICallForStrings() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  console.log('in the sage before api request');
  yield takeLatest(LOAD_STRINGS, getStrings);
}
