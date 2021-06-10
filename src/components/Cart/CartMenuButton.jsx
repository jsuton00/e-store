import React from 'react';
import ToggleButton from '../Buttons/ToggleButton';
import CartCounter from './CartCounter';

const CartMenuButton = (props) => {
	const { handleCartMenu } = props;

	return (
		<ToggleButton name="cart-menu-button" handleToggle={handleCartMenu}>
			<CartCounter />
		</ToggleButton>
	);
};

export default CartMenuButton;
