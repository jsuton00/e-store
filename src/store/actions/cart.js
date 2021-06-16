import * as actionTypes from './actionTypes';

export const selectQuantity = (quantity) => ({
	type: actionTypes.SELECT_QUANTITY,
	quantity: Number(quantity),
});

export const addToCart = (productId, quantity) => ({
	type: actionTypes.ADD_TO_CART,
	productId,
	quantity: quantity || 1,
});

export const addToCartFail = () => ({
	type: actionTypes.ADD_TO_CART_FAIL,
});

export const addToCartSuccess = (cartItem) => ({
	type: actionTypes.ADD_TO_CART_SUCCESS,
	cartItem,
});

export const updateCartItem = (productId, quantity) => ({
	type: actionTypes.UPDATE_CART_ITEM,
	productId,
	quantity,
});

export const removeFromCart = (productId) => ({
	type: actionTypes.REMOVE_FROM_CART,
	productId,
});

export const increaseQuantity = (productId, quantity = 1) => ({
	type: actionTypes.INCREASE_QUANTITY,
	productId,
	quantity: quantity,
});

export const decreaseQuantity = (productId, quantity = 1) => ({
	type: actionTypes.DECREASE_QUANTITY,
	productId,
	quantity: quantity,
});

export const setQuantity = (quantity) => ({
	type: actionTypes.SET_QUANTITY,
	quantity: Number(quantity),
});
