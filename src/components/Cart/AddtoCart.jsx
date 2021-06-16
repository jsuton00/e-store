import React, { useRef } from 'react';
import { CartIcon } from '../../utils/icons-import';

const AddtoCart = (props) => {
	const { productId, addToCart, quantity } = props;

	const addToCartRef = useRef();

	const handleClick = (e) => {
		if (e.target.value === addToCartRef.current.value) {
			return addToCart(e.target.value, quantity);
		}
	};

	return (
		<button
			ref={addToCartRef}
			type="button"
			className="btn add-to-cart-btn"
			onClick={handleClick}
			value={productId}
		>
			<span className="btn-icon cart-icon">
				<CartIcon />
			</span>
			Add to Cart
		</button>
	);
};

export default AddtoCart;
