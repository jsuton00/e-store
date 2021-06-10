import * as actionTypes from '../actions/actionTypes';
import { ORDER_QUANTITY_OPTIONS } from '../../constants/options';
import { orderItemObject, updateObjects } from '../helpers/reduxUtils';

const initialState = {
	orders: [],
	orderItemId: '',
	itemQuantity: 0,
	total: 0,
	orderQuantityOptions: ORDER_QUANTITY_OPTIONS,
	orderQuantityValue: Number(ORDER_QUANTITY_OPTIONS[0]),
};

const selectQuantity = (state, action) => {
	return updateObjects(state, {
		orderQuantityValue: action.quantity,
	});
};

const addToCart = (state, action) => {
	let orders = [...state.orders];
	let orderItem;
	let quantity;

	if (!action.quantity) {
		quantity = 1;
		orderItem = orderItemObject(action.productId, quantity);
	} else {
		quantity = action.quantity;
		orderItem = orderItemObject(action.productId, quantity);
	}

	if (orderItem) {
		orders = [...orders, orderItem];
	}

	return updateObjects(state, {
		orders: orders,
		itemQuantity: orders.length > 0 ? orderItem.length : 0,
		orderItemId: action.productId,
	});
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_QUANTITY:
			return selectQuantity(state, action);
		case actionTypes.ADD_TO_CART:
			return addToCart(state, action);
		default:
			return state;
	}
};

export default cart;
