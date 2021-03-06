import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
	fetchProductsSaga,
	fetchProductsCategories,
	addToCartSaga,
} from '../sagas/productSagas';

export default function* watchStore() {
	yield all([
		takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga),
		takeEvery(actionTypes.FETCH_PRODUCT_CATEGORIES, fetchProductsCategories),
		takeEvery(actionTypes.ADD_TO_CART, addToCartSaga),
	]);
}
