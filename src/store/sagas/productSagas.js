import * as actions from '../actions/index';
import * as api from '../../apis/products';
import { put, call } from 'redux-saga/effects';
import { cartItemObject } from '../helpers/reduxUtils';

export function* fetchProductsSaga(action) {
	try {
		yield put(actions.loadingProducts());
		const response = yield call(api.fetchProducts);
		yield put(actions.fetchProductsSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchProductsFail());
	}
}

export function* fetchProductsCategories(action) {
	try {
		yield put(actions.loadingProducts());
		const response = yield call(api.fetchProductCategories);
		yield put(actions.fetchProductCategoriesSuccess(response.data));
	} catch (err) {
		yield put(actions.fetchProductCategoriesFail());
	}
}

export function* addToCartSaga(action) {
	try {
		let response;
		let cartItem;

		if (action.productId) {
			response = yield call(api.fetchProduct, action.productId);
			cartItem = response ? cartItemObject(response.data, action.quantity) : '';
		}

		yield put(
			actions.addToCartSuccess({
				productId: action.productId,
				cartItem: cartItem,
				quantity: action.quantity,
			}),
		);
	} catch (err) {
		yield put(actions.addToCartFail());
	}
}
