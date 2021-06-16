export const cartItems = (state) =>
	state.cart.cartItems.length > 0 && [...state.cart.cartItems];
export const existingItem = (state, action) =>
	state.cart.cartItems.length > 0 &&
	state.cart.cartItems.find((item) => item.id === action.productId);
