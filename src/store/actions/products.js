import * as actionTypes from './actionTypes';

export const loadingProducts = () => ({
	type: actionTypes.LOADING_PRODUCTS,
});

export const fetchProducts = () => ({
	type: actionTypes.FETCH_PRODUCTS,
});

export const fetchProductsFail = () => ({
	type: actionTypes.FETCH_PRODUCTS_FAIL,
});

export const fetchProductsSuccess = (products) => ({
	type: actionTypes.FETCH_PRODUCTS_SUCCESS,
	products,
});

export const fetchProduct = (productId) => ({
	type: actionTypes.FETCH_PRODUCT,
	productId,
});

export const fetchProductCategories = () => ({
	type: actionTypes.FETCH_PRODUCT_CATEGORIES,
});

export const fetchProductCategoriesFail = () => ({
	type: actionTypes.FETCH_PRODUCT_CATEGORIES_FAIL,
});

export const fetchProductCategoriesSuccess = (categories) => ({
	type: actionTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS,
	categories,
});

export const checkCategory = (category, checked) => ({
	type: actionTypes.CHECK_CATEGORY,
	category,
	checked,
});

export const filterByCategories = (categories) => ({
	type: actionTypes.FILTER_BY_CATEGORIES,
	categories,
});

export const setMinInputValue = (minValue) => ({
	type: actionTypes.SET_MIN_VALUE,
	minValue,
});

export const setMaxInputValue = (maxValue) => ({
	type: actionTypes.SET_MAX_VALUE,
	maxValue,
});

export const filterByPrices = (minPrice, maxPrice) => ({
	type: actionTypes.FILTER_BY_PRICES,
	minPrice: Number(minPrice),
	maxPrice: Number(maxPrice),
});

export const selectOption = (optionValue) => ({
	type: actionTypes.SELECT_OPTION,
	optionValue,
});

export const sortByName = (sortOption) => ({
	type: actionTypes.SORT_BY_NAME,
	sortOption,
});

export const sortByPrice = (sortOption) => ({
	type: actionTypes.SORT_BY_PRICE,
	sortOption,
});

export const searchProducts = (searchTerm) => ({
	type: actionTypes.SEARCH_PRODUCTS,
	searchTerm,
});

export const selectProductId = (productId) => ({
	type: actionTypes.SELECT_PRODUCT_ID,
	productId,
});

export const getRelatedProducts = (category, productId) => ({
	type: actionTypes.GET_RELATED_PRODUCTS,
	category,
	productId,
});
