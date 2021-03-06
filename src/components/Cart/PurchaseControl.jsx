import React, { useEffect } from 'react';
import { useViewportContext } from '../../hooks/useViewport';
import AddtoCart from './AddtoCart';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Select from '../Inputs/Select';

const PurchaseControl = (props) => {
	const {
		productId,
		productPrice,
		quantities,
		quantity,
		selectQuantity,
		addToCart,
		updateCartItem,
	} = props;

	const [width] = useViewportContext();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (productId && quantity) {
				return updateCartItem(productId, quantity);
			}
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [productId, quantity, updateCartItem]);

	return (
		<div
			className={`product-purchase-control-${
				width > 991 ? 'container' : 'banner row'
			}`}
		>
			<div className="product-purchase-control-section product-price-section">
				<h5 className="product-purchase-control-title">Buy</h5>
				<p className="product-price">{`€${productPrice}`}</p>
			</div>
			<div className="product-purchase-control-section product-add-to-cart-section row">
				<Select
					options={quantities}
					optionValue={quantity}
					selectType="quantity"
					selectOption={(value) => selectQuantity(value)}
				/>
				<AddtoCart
					productId={productId}
					quantity={quantity}
					addToCart={(productId, quantity) => addToCart(productId, quantity)}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	quantities: state.cart.orderQuantityOptions,
	quantity: state.cart.orderQuantityValue,
});

const mapDispatchToProps = (dispatch) => ({
	selectQuantity: (quantity) => dispatch(actions.selectQuantity(quantity)),
	addToCart: (productId, quantity) =>
		dispatch(actions.addToCart(productId, quantity)),
	updateCartItem: (productId, quantity) =>
		dispatch(actions.updateCartItem(productId, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseControl);
