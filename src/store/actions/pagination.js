import * as actionTypes from './actionTypes';

export const loadPages = (pageData, currentPage, pageSize) => ({
	type: actionTypes.LOAD_PAGES,
	pageData,
	currentPage,
	pageSize,
});

export const loadNextPage = (page = 1) => ({
	type: actionTypes.LOAD_NEXT_PAGE,
	page,
});

export const loadPreviousPage = (page = 1) => ({
	type: actionTypes.LOAD_PREVIOUS_PAGE,
	page,
});

export const loadSelectedPage = (page) => ({
	type: actionTypes.LOAD_SELECTED_PAGE,
	page,
});

export const setPageSize = (pageSize) => ({
	type: actionTypes.SET_PAGE_SIZE,
	pageSize,
});
