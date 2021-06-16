import { all, takeEvery, takeLatest } from 'redux-saga/effects';
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
		takeLatest(actionTypes.ADD_TO_CART, addToCartSaga),
	]);
}
