import * as actionTypes from './actionTypes';

export const loadingUsers = () => ({
	type: actionTypes.LOADING_USERS,
});

export const fetchUsers = () => ({
	type: actionTypes.FETCH_USERS,
});

export const fetchUsersFail = () => ({
	type: actionTypes.FETCH_USERS_FAIL,
});

export const fetchUsersSuccess = (users) => ({
	type: actionTypes.FETCH_USERS_SUCCESS,
	users,
});

export const fetchUser = (userId) => ({
	type: actionTypes.FETCH_USER,
	userId,
});

export const fetchUserFail = () => ({
	type: actionTypes.FETCH_USER_FAIL,
});

export const fetchUserSuccess = (user) => ({
	type: actionTypes.FETCH_USER_SUCCESS,
	user,
});

export const deleteUser = (userId) => ({
	type: actionTypes.DELETE_USER,
	userId,
});

export const deleteUserFail = (error) => ({
	type: actionTypes.DELETE_USER_FAIL,
	error,
});

export const deleteUserSuccess = () => ({
	type: actionTypes.DELETE_USER_SUCCESS,
});
