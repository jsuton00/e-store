import * as actionTypes from './actionTypes';

export const selectQuantity = (quantity) => ({
	type: actionTypes.SELECT_QUANTITY,
	quantity: Number(quantity),
});

export const addToCart = (productId, quantity) => ({
	type: actionTypes.ADD_TO_CART,
	productId,
	quantity,
});
