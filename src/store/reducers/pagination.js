import { updateObjects } from '../helpers/reduxUtils';
import * as actionTypes from '../actions/actionTypes';
import { PAGE_SIZE_OPTIONS } from '../../constants/options';

const initialState = {
	pageData: [],
	shownData: [],
	totalItems: 0,
	totalPages: 0,
	pageSize: PAGE_SIZE_OPTIONS[1],
	pageSizes: PAGE_SIZE_OPTIONS,
	currentPage: 1,
	startIndex: 0,
	endIndex: 0,
	startPage: 1,
	endPage: 10,
	pages: [],
};

const loadPages = (state, action) => {
	let currentPage = action.currentPage || 1;
	let pageSize = action.pageSize || state.pageSize;
	let totalItems = action.pageData && action.pageData.length;
	let totalPages = Math.ceil(totalItems / pageSize);
	let startPage;
	let endPage;
	let startIndex;
	let endIndex;
	let pages;
	let shownData;

	if (totalPages <= 10) {
		startPage = 1;
		endPage = totalPages;
	} else {
		if (currentPage <= 6) {
			startPage = 1;
			endPage = 10;
		} else if (currentPage + 4 >= totalPages) {
			startPage = totalPages - 9;
			endPage = totalPages;
		} else {
			startPage = currentPage - 5;
			endPage = currentPage + 4;
		}
	}

	startIndex = (currentPage - 1) * pageSize;
	endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

	pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i);

	shownData =
		action.pageData && action.pageData.slice(startIndex).slice(0, pageSize);

	return updateObjects(state, {
		pageData: [...action.pageData],
		shownData: [...shownData],
		totalItems: totalItems,
		totalPages: totalPages,
		startPage: startPage,
		endPage: endPage,
		startIndex: startIndex,
		endIndex: endIndex,
		pages: [...pages],
	});
};

const loadNextPage = (state, action) => {
	let newPage;
	if (state.currentPage < state.endPage) {
		newPage = state.currentPage + action.page;
		return updateObjects(state, {
			currentPage: newPage,
		});
	} else {
		return updateObjects(state, {
			currentPage: state.endPage,
		});
	}
};

const loadPreviousPage = (state, action) => {
	let previousPage;
	if (state.currentPage > state.startPage) {
		previousPage = state.currentPage - action.page;
		return updateObjects(state, {
			currentPage: previousPage,
		});
	} else {
		return updateObjects(state, {
			currentPage: state.startPage,
		});
	}
};

const loadSelectedPage = (state, action) => {
	return updateObjects(state, {
		currentPage: action.page,
	});
};

const setPageSize = (state, action) => {
	return updateObjects(state, {
		pageSize: action.pageSize,
	});
};

const pagination = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_PAGES:
			return loadPages(state, action);
		case actionTypes.LOAD_NEXT_PAGE:
			return loadNextPage(state, action);
		case actionTypes.LOAD_PREVIOUS_PAGE:
			return loadPreviousPage(state, action);
		case actionTypes.LOAD_SELECTED_PAGE:
			return loadSelectedPage(state, action);
		case actionTypes.SET_PAGE_SIZE:
			return setPageSize(state, action);
		default:
			return state;
	}
};

export default pagination;
