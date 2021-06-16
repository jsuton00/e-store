import React from 'react';
import CartCounter from './CartCounter';
import Checkout from './Checkout';
import '../../styles/components/cart-menu.css';
import CloseButton from '../Buttons/CloseButton';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CartItem from './CartItem';
import { roundPrices } from '../../utils/displayNumbers';

const CartMenu = (props) => {
	const { cartItems, total, closeCartMenu, removeCartItem } = props;
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
				{cartItems.length > 0 &&
					cartItems.map((item, i) => {
						return (
							<CartItem
								key={i}
								productId={item.id}
								productTitle={item.title}
								productImage={item.image}
								productPrice={item.price}
								quantity={item.quantity}
								removeItem={() => removeCartItem(item.id)}
							/>
						);
					})}
			</div>
			<div className="cart-menu-section total-display-section">
				<p className="total-display">
					Total:{' '}
					<span className="total-amount">{`€${roundPrices(total)}`}</span>
				</p>
			</div>
			<div className="cart-menu-section checkout-btn-row row">
				<Checkout />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems.length > 0 && [...state.cart.cartItems],
	total: state.cart.total,
});

const mapDispatchToProps = (dispatch) => ({
	removeCartItem: (productId) => dispatch(actions.removeFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
