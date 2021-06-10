import { updateObjects } from '../helpers/reduxUtils';
import * as actionTypes from '../actions/actionTypes';
import { SORT_OPTIONS } from '../../constants/options';
import { searchArray } from '../../utils/arrayUtils';

const initialState = {
	products: [],
	filteredProducts: [],
	relatedProducts: [],
	productId: '',
	product: '',
	minValue: '',
	maxValue: '',
	minPrice: '',
	maxPrice: '',
	sortProductsOption: SORT_OPTIONS[0],
	sortProductsOptions: SORT_OPTIONS,
	checkedCategories: [],
	categories: [],
	loadingProducts: false,
	errorFetchingProducts: false,
	errorFetchingCategories: false,
};

const loadingProducts = (state, action) => {
	return updateObjects(state, {
		loadingProducts: true,
	});
};

const fetchProductsFail = (state, action) => {
	return updateObjects(state, {
		errorFetchingProducts: true,
		loadingProducts: false,
	});
};

const fetchProductsSuccess = (state, action) => {
	return updateObjects(state, {
		products: action.products,
		filteredProducts: action.products,
		loadingProducts: false,
		errorFetchingProducts: false,
	});
};

const fetchProductCategoriesFail = (state, action) => {
	return updateObjects(state, {
		loadingProducts: false,
		errorFetchingCategories: true,
	});
};

const fetchProductCategoriesSuccess = (state, action) => {
	return updateObjects(state, {
		categories: action.categories,
		loadingProducts: false,
		errorFetchingCategories: false,
	});
};

const checkCategory = (state, action) => {
	let checkedCategories;
	let checkedCategory;

	if (action.checked === true) {
		checkedCategories = [...state.checkedCategories, action.category];
		return updateObjects(state, {
			checkedCategories: [...checkedCategories],
		});
	} else {
		checkedCategory = state.checkedCategories.some(
			(c) => c === action.category,
		);
		return updateObjects(state, {
			checkedCategories: checkedCategory
				? state.checkedCategories.filter((c) => c !== action.category)
				: [...state.checkedCategories, action.category],
		});
	}
};

const filterByCategories = (state, action) => {
	let categories = action.categories;
	let filteredProducts;

	if (categories.length === 0) {
		return updateObjects(state, {
			filteredProducts: [...state.products],
			checkedCategories: [...categories],
		});
	} else if (state.minPrice && state.maxPrice) {
		filteredProducts = state.products.filter(
			(p) =>
				p.price >= state.minPrice &&
				p.price <= state.maxPrice &&
				categories.includes(p.category),
		);
	} else {
		filteredProducts = state.products.filter((p) =>
			categories.includes(p.category),
		);
	}

	return updateObjects(state, {
		filteredProducts: filteredProducts.length > 0 && [...filteredProducts],
		checkedCategories: categories,
	});
};

const setMinPrice = (state, action) => {
	return updateObjects(state, {
		minValue: action.minValue,
	});
};

const setMaxPrice = (state, action) => {
	return updateObjects(state, {
		maxValue: action.maxValue,
	});
};

const filterByPrices = (state, action) => {
	let updatedFilteredProducts;
	let minPrice = 0;
	let maxPrice = 0;

	if (action.minPrice === 0 && action.maxPrice === 0) {
		return updateObjects(state, {
			filteredProducts: [...state.products],
			minPrice: minPrice,
			maxPrice: maxPrice,
		});
	} else {
		minPrice = action.minPrice;
		maxPrice = action.maxPrice;
		if (maxPrice >= minPrice) {
			updatedFilteredProducts = [
				...state.products.filter(
					(p) => p.price >= minPrice && p.price <= maxPrice,
				),
			];
			return updateObjects(state, {
				filteredProducts:
					updatedFilteredProducts.length > 0 && updatedFilteredProducts,
				minPrice: minPrice,
				maxPrice: maxPrice,
			});
		}

		return updateObjects(state, {
			filteredProducts: [...state.filteredProducts],
			minPrice: minPrice,
			maxPrice: maxPrice,
		});
	}
};

const selectOption = (state, action) => {
	return updateObjects(state, {
		sortProductsOption: action.optionValue,
	});
};

const sortByName = (state, action) => {
	let sortOption = action.sortOption;
	const sortProductsOptions = state.sortProductsOptions;
	let filteredProducts = [...state.filteredProducts];

	if (!sortOption) {
		return updateObjects(state, {
			filteredProducts: [...state.products],
			loadingProducts: false,
		});
	} else {
		if (sortOption === sortProductsOptions[0]) {
			filteredProducts = [...state.products];
		} else if (sortOption === sortProductsOptions[3]) {
			filteredProducts = [...filteredProducts].sort((a, b) =>
				a.title > b.title ? 1 : -1,
			);
		} else if (sortOption === sortProductsOptions[4]) {
			filteredProducts = [...filteredProducts].sort((a, b) =>
				b.title > a.title ? 1 : -1,
			);
		}
	}

	return updateObjects(state, {
		filteredProducts: filteredProducts,
		sortProductsOption: sortOption,
		loadingProducts: false,
	});
};

const sortByPrice = (state, action) => {
	let sortOption = action.sortOption;
	const sortProductsOptions = state.sortProductsOptions;
	let filteredProducts = [...state.filteredProducts];

	if (!sortOption) {
		return updateObjects(state, {
			filteredProducts: [...state.products],
		});
	} else {
		if (sortOption === sortProductsOptions[0]) {
			filteredProducts = [...state.products];
		} else if (sortOption === sortProductsOptions[1]) {
			filteredProducts = [...filteredProducts].sort(
				(a, b) => a.price - b.price,
			);
		} else if (sortOption === sortProductsOptions[2]) {
			filteredProducts = [...filteredProducts].sort(
				(a, b) => b.price - a.price,
			);
		}
	}

	return updateObjects(state, {
		filteredProducts: filteredProducts,
		sortProductsOption: sortOption,
		loadingProducts: false,
	});
};

export const setSearchTerm = (state, action) => {
	return updateObjects(state, {
		searchTerm: action.searchTerm,
	});
};

export const fetchProduct = (state, action) => {
	let product;

	if (action.productId) {
		product =
			state.products.length > 0
				? state.products.find((p) => p.id === action.productId)
				: '';
	}

	return updateObjects(state, {
		product: product,
		productId: action.productId,
	});
};

export const searchProducts = (state, action) => {
	let searchTerm = action.searchTerm;
	let searchedProducts;

	if (searchTerm.length > 0) {
		searchedProducts =
			state.products.length > 0 && searchArray(state.products, searchTerm);
	} else {
		searchedProducts = [...state.products];
	}

	return updateObjects(state, {
		filteredProducts: searchedProducts.length > 0 && searchedProducts,
		loadingProducts: false,
	});
};

const selectProductId = (state, action) => {
	return updateObjects(state, {
		productId: action.productId,
	});
};

const getRelatedProducts = (state, action) => {
	let relatedProducts;

	if (action.category && action.productId) {
		relatedProducts = state.products.filter(
			(p) => p.category === action.category && p.id !== action.productId,
		);
	}

	return updateObjects(state, {
		relatedProducts: relatedProducts,
		productId: action.productId,
	});
};

const products = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS_FAIL:
			return fetchProductsFail(state, action);
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return fetchProductsSuccess(state, action);
		case actionTypes.FETCH_PRODUCT_CATEGORIES_FAIL:
			return fetchProductCategoriesFail(state, action);
		case actionTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS:
			return fetchProductCategoriesSuccess(state, action);
		case actionTypes.CHECK_CATEGORY:
			return checkCategory(state, action);
		case actionTypes.FILTER_BY_CATEGORIES:
			return filterByCategories(state, action);
		case actionTypes.SET_MIN_VALUE:
			return setMinPrice(state, action);
		case actionTypes.SET_MAX_VALUE:
			return setMaxPrice(state, action);
		case actionTypes.SELECT_OPTION:
			return selectOption(state, action);
		case actionTypes.SORT_BY_NAME:
			return sortByName(state, action);
		case actionTypes.SORT_BY_PRICE:
			return sortByPrice(state, action);
		case actionTypes.FILTER_BY_PRICES:
			return filterByPrices(state, action);
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.SEARCH_PRODUCTS:
			return searchProducts(state, action);
		case actionTypes.SELECT_PRODUCT_ID:
			return selectProductId(state, action);
		case actionTypes.FETCH_PRODUCT:
			return fetchProduct(state, action);
		case actionTypes.GET_RELATED_PRODUCTS:
			return getRelatedProducts(state, action);
		case actionTypes.LOADING_PRODUCTS:
			return loadingProducts(state, action);
		default:
			return state;
	}
};

export default products;
