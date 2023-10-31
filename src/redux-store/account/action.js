import * as ActionTypes from './actionTypes';

export const actionSavingMyProfile = (payload) => ({
  type: ActionTypes.SAVING_MY_PROFILE,
  payload, // PARAMETER
});

export const actionGetMyProfile = () => ({
  type: ActionTypes.GET_MY_PROFILE,
});

export const actionGetMyProfileSuccess = (payload) => ({
  type: ActionTypes.GET_MY_PROFILE_SUCCESS,
  payload,
});

export const actionGetMyProfileFailed = () => ({
  type: ActionTypes.GET_MY_PROFILE_FAILED,
});
export const actionLogin = (payload) => ({
  type: ActionTypes.LOGIN,
  payload
});
export const actionLoginFailed = () => ({
  type: ActionTypes.LOGIN_FAILED,
});
export const actionLoginSuccess = (payload) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload,
});
export const actionLogout = () => ({
  type: ActionTypes.LOGOUT,
});