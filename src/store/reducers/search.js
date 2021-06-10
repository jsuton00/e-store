import * as actionTypes from '../actions/actionTypes';
import { updateObjects } from '../helpers/reduxUtils';

const initialState = {
	searchTerm: '',
};

const setSearchTerm = (state, action) => {
	return updateObjects(state, { searchTerm: action.searchTerm });
};

const search = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		default:
			return state;
	}
};

export default search;
