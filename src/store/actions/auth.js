import * as actionTypes from './actionTypes';

export const loadingToRegister = () => ({
	type: actionTypes.LOADING_TO_REGISTER,
});

export const registerUser = (user) => ({
	type: actionTypes.REGISTER_USER,
	user,
});

export const registerUserFail = (error) => ({
	type: actionTypes.REGISTER_USER_FAIL,
	error,
});

export const registerUserSuccess = (user) => ({
	type: actionTypes.REGISTER_USER_SUCCESS,
	user,
});

export const loadingToLogin = () => ({
	type: actionTypes.LOADING_TO_LOGIN,
});

export const loginUser = (username, password) => ({
	type: actionTypes.LOGIN_USER,
	username,
	password,
});

export const loginUserFail = (error) => ({
	type: actionTypes.LOGIN_USER_FAIL,
	error,
});

export const loginUserSuccess = (user) => ({
	type: actionTypes.LOGIN_USER_SUCCESS,
	user,
});

export const logoutUser = () => ({
	type: actionTypes.LOGOUT_USER,
});

export const setUser = (user) => ({
	type: actionTypes.SET_USER,
	user,
});
