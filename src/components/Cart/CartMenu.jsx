import React from 'react';
import CartCounter from './CartCounter';
import Checkout from './Checkout';
import '../../styles/components/cart-menu.css';
import CloseButton from '../Buttons/CloseButton';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartMenu = (props) => {
	const { orders, closeCartMenu } = props;
	return (
		<div className="cart-menu container-fluid">
			<div className="cart-menu-section cart-menu-header row">
				<h5 className="cart-counter-text-indicator">
					<CartCounter /> Products in Cart
				</h5>
				<div className="cart-close-button">
					<CloseButton handleClose={closeCartMenu} />
				</div>
			</div>
			<div className="cart-menu-section order-list list-group">
				{orders.length > 0 &&
					orders.map((item, i) => {
						return (
							<div key={i} className="order-list-item list-group-item">
								<CartItem productId={item.productId} quantity={item.quantity} />
							</div>
						);
					})}
			</div>
			<div className="cart-menu-section checkout-btn-row row">
				<Checkout />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	orders: state.cart.orders,
});

export default connect(mapStateToProps)(CartMenu);
