import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const CartItem = (props) => {
	const { product } = props;

	console.log(product);
	return (
		<div className="cart-item card mb-3">
			<div className="row no-gutters">
				<img src={product.image} className="card-img" alt={product.title} />
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="product-title card-title">{product.title}</h5>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: state.products.products.length > 0 && {
		...state.products.products.find((p) => p.id === ownProps.productId),
		quantity: ownProps.quantity,
	},
});

const mapDispatchToProps = (dispatch) => ({
	getProduct: (productId) => dispatch(actions.fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
