import * as actionTypes from '../actions/actionTypes';
import { ORDER_QUANTITY_OPTIONS } from '../../constants/options';
import { cartItemObject, updateObjects } from '../helpers/reduxUtils';

const initialState = {
	cartItems: [],
	itemQuantity: 0,
	total: 0,
	loadingCart: false,
	errorAddingToCart: false,
	orderQuantityOptions: ORDER_QUANTITY_OPTIONS,
	orderQuantityValue: Number(ORDER_QUANTITY_OPTIONS[0]),
};

const selectQuantity = (state, action) => {
	return updateObjects(state, {
		orderQuantityValue: action.quantity,
	});
};

const addToCartFail = (state, action) => {
	return updateObjects(state, {
		errorAddingToCart: true,
		loadingProducts: false,
	});
};

const addToCartSuccess = (state, action) => {
	let cartItems = [...state.cartItems];
	let cartItem;
	let quantity;

	const existingItem = state.cartItems.find(
		(item) => item.id === action.cartItem.productId,
	);

	if (action.cartItem.quantity === 1) {
		if (existingItem) {
			quantity = existingItem.quantity;
			cartItems = cartItems.map((item) =>
				item.id === action.cartItem.productId
					? { ...item, quantity: quantity + 1 }
					: item,
			);
		} else {
			cartItems = [...cartItems, action.cartItem.cartItem];
		}
	} else {
		quantity = action.cartItem.quantity;
		cartItem = cartItemObject(action.cartItem.cartItem, quantity);
		cartItems = [...cartItems, cartItem];
	}

	return updateObjects(state, {
		cartItems: cartItems,
		total:
			cartItems.length > 0 &&
			cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
	});
};

const increaseQuantity = (state, action) => {
	const items = state.cartItems;
	const item =
		items.length > 0 && items.find((item) => item.id === action.productId);
	if (item) {
		item.quantity += action.quantity;
	}

	return updateObjects(state, {
		cartItems: items,
		total: items.reduce((acc, item) => acc + item.quantity * item.price, 0),
	});
};

const decreaseQuantity = (state, action) => {
	const items = state.cartItems;
	let updatedCartItems = [];
	const item =
		items.length > 0 && items.find((item) => item.id === action.productId);
	if (item) {
		item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
	}

	updatedCartItems =
		items.length > 0 &&
		[...items].filter((item) =>
			item.id === action.productId ? item.quantity > 0 : item,
		);
	return updateObjects(state, {
		cartItems: updatedCartItems,
		total: items.reduce((acc, item) => acc + item.quantity * item.price, 0),
	});
};

const removeFromCart = (state, action) => {
	let updatedCartItems = [...state.cartItems];

	if (action.productId) {
		updatedCartItems =
			updatedCartItems.length > 0 &&
			[...state.cartItems].filter((item) => item.id !== action.productId);
	}

	return updateObjects(state, {
		cartItems: updatedCartItems.length > 0 && [...updatedCartItems],
		total: updatedCartItems.reduce(
			(acc, item) => acc + item.quantity * item.price,
			0,
		),
	});
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_QUANTITY:
			return selectQuantity(state, action);
		case actionTypes.ADD_TO_CART_FAIL:
			return addToCartFail(state, action);
		case actionTypes.ADD_TO_CART_SUCCESS:
			return addToCartSuccess(state, action);
		case actionTypes.INCREASE_QUANTITY:
			return increaseQuantity(state, action);
		case actionTypes.DECREASE_QUANTITY:
			return decreaseQuantity(state, action);
		case actionTypes.REMOVE_FROM_CART:
			return removeFromCart(state, action);
		default:
			return state;
	}
};

export default cart;
