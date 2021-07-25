import * as actionTypes from '../actions/actionTypes';
import { updateObjects, userObject } from '../helpers/reduxUtils';

const initialState = {
	user: userObject,
	userData: { ...userObject, confirmPassword: '' },
	registrationSuccess: false,
	errorRegistering: false,
	errorLogin: false,
	loadingToRegister: false,
	loadingToLogin: false,
};

const loadingToRegister = (state, action) => {
	return updateObjects(state, {
		loadingToRegister: true,
	});
};

const setUser = (state, action) => {
	return updateObjects(state, {
		userData: action.user,
	});
};

const registerUserFail = (state, action) => {
	return updateObjects(state, {
		loadingToRegister: false,
		errorRegistering: true,
	});
};

const registerUserSuccess = (state, action) => {
	return updateObjects(state, {
		user: action.user,
		registrationSuccess: true,
		loadingToRegister: false,
	});
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_TO_REGISTER:
			return loadingToRegister(state, action);
		case actionTypes.SET_USER:
			return setUser(state, action);
		case actionTypes.REGISTER_USER_FAIL:
			return registerUserFail(state, action);
		case actionTypes.REGISTER_USER_SUCCESS:
			return registerUserSuccess(state, action);
		default:
			return state;
	}
};

export default auth;
