export const saveToLocalStorage = (state) => {
	try {
		let cart = [];

		if (state.cart.orders.length > 0) {
			cart = [...state.cart.orders];
		}
		const serializedState = cart.length > 0 && JSON.stringify(cart);
		localStorage.setItem('cart', serializedState);
	} catch (error) {
		console.warn(error);
		return '';
	}
};

export const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('cart');
		if (serializedState === null) {
			return '';
		} else {
			return JSON.parse(serializedState);
		}
	} catch (err) {
		console.warn(err);
		return '';
	}
};
