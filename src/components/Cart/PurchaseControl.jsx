import React from 'react';
import AddtoCart from './AddtoCart';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import '../../styles/components/purchase-control.css';
import Select from '../Inputs/Select';

const PurchaseControl = (props) => {
	const {
		productId,
		productPrice,
		quantities,
		quantity,
		selectQuantity,
		addToCart,
	} = props;

	return (
		<div className="product-purchase-control">
			<h5 className="product-purchase-control-title">Buy</h5>
			<div className="product-purchase-control-section product-price-section row">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseControl);
