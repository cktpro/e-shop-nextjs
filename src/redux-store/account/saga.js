import * as user from '@/api/userApi';
import { put, takeLeading } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { actionLoginSuccess,actionLoginFailed, actionGetMyProfileSuccess, actionGetMyProfileFailed } from './action';

function* loginSaga(action) {
  try {
    const response = yield user.login(action.payload)
    yield put(actionLoginSuccess(response));
  } catch (error) {
    yield put(actionLoginFailed());
  }
}
function* getMyProfile() {
  try {
    const response = yield  user.getMe()
    yield put(actionGetMyProfileSuccess(response));
  } catch (error) {
    yield put(actionGetMyProfileFailed());
  }
}
function* logoutSaga() {
  try {
   yield  user.logout()
  } catch (error) {
    yield put(error);
  }
}


export default function* accountSaga() {
  yield takeLeading(ActionTypes.LOGIN, loginSaga);
  yield takeLeading(ActionTypes.GET_MY_PROFILE, getMyProfile);
  yield takeLeading(ActionTypes.LOGOUT, logoutSaga);
  
};