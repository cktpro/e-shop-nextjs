import {all,fork } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import accountSaga from './account/saga';

export default function* rootSaga() {
  yield all([
    fork(accountSaga),
  ]);
}
