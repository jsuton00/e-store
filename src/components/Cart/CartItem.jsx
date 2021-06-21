import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import { calculateTotalPrice, roundPrices } from '../../utils/displayNumbers';
import { RemoveIcon } from '../../utils/icons-import';
import QuantityCounter from './QuantityCounter';

const CartItem = (props) => {
	const {
		productId,
		productTitle,
		productImage,
		productPrice,
		quantity,
		removeItem,
		visitProduct,
	} = props;

	const dispatch = useDispatch();

	const cartItemRef = useRef();

	const handleClick = (e) => {
		if (e.target.value === cartItemRef.current.value) {
			return visitProduct(e.target.value);
		}
	};

	return (
		<div
			ref={cartItemRef}
			className="cart-item card"
			onClick={handleClick}
			value={productId}
		>
			<div className="cart-item-content row no-gutters">
				<div className="cart-item-img-col col-md-4">
					<img src={productImage} className="card-img" alt={productTitle} />
				</div>
				<div className="col-md-8">
					<div className="cart-item-body card-body">
						<h5 className="cart-item-title card-title" value={productId}>
							{productTitle}
						</h5>
						<div className="cart-item-price-control card-text row">
							<span className="cart-item-quantity">
								<QuantityCounter
									productId={productId}
									quantity={quantity}
									increaseQuantity={() =>
										dispatch(actions.increaseQuantity(productId))
									}
									decreaseQuantity={() =>
										dispatch(actions.decreaseQuantity(productId))
									}
								/>
							</span>
							<span className="cart-item-price">{`€${roundPrices(
								productPrice,
							)}`}</span>
						</div>
						<p className="cart-item-total-price card-text">
							Total: {`€${calculateTotalPrice(productPrice, quantity)}`}
						</p>
					</div>
				</div>
			</div>
			<button
				type="button"
				className="btn remove-cart-item-btn"
				onClick={(e) => removeItem(e.target.value)}
				value={productId}
			>
				<span className="btn-icon">
					<RemoveIcon />
				</span>
			</button>
		</div>
	);
};

export default CartItem;
