/**
 * Tests for ShowStrings sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_STRINGS } from '../constants';
import { loadStringsSuccess, loadStringsError } from '../actions';

import stringData, { getStrings } from '../saga';

// const username = 'mxstbr';

// /* eslint-disable redux-saga/yield-effects */
describe('showStrings Saga', () => {
  let loadStringsGenerator;

  beforeEach(() => {
    loadStringsGenerator = getStrings();

    const selectDescriptor = loadStringsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [{ id: 1, data: 'hi' }];
    const putDescriptor = loadStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadStringsSuccess(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = loadStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadStringsError(response)));
  });

  describe('makeAPICallForStrings Saga', () => {
    const makeAPICallSaga = stringData();

    it('should start task to watch for LOAD_STRING action', () => {
      const takeLatestDescriptor = makeAPICallSaga.next().value;
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_STRINGS, getStrings),
      );
    });
  });
});
