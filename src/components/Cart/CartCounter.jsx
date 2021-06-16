import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../../utils/icons-import';

const CartCounter = () => {
	const ordersCount = useSelector(
		(state) =>
			state.cart.cartItems.length > 0 &&
			state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0),
	);
	return (
		<>
			<CartIcon /> Cart{' '}
			<span className="cart-counter">{ordersCount > 0 ? ordersCount : 0}</span>
		</>
	);
};

export default CartCounter;
