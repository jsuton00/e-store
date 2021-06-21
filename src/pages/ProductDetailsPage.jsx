import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductDetails from '../components/Products/ProductDetails';
import PurchaseControl from '../components/Cart/PurchaseControl';
import RelatedProducts from '../components/Products/RelatedProducts';
import * as actions from '../store/actions/index';
import '../styles/pages/product-details-page.css';

const ProductDetailsPage = (props) => {
	const { product, productId, getProduct, productCategory } = props;

	useEffect(() => {
		if (productId) {
			return getProduct(productId);
		}
	}, [getProduct, productId]);

	return (
		<div className="product-details-page container-fluid">
			<div className="product-details-page-content">
				<div className="product-details-page-section product-details-header row">
					<div className="product-details-header-section main-product-details">
						{product && (
							<ProductDetails
								productImage={product.image}
								productTitle={product.title}
								productDescription={product.description}
								productCategory={product.category}
							/>
						)}
					</div>
					<div className="product-details-header-section purchase-controls">
						{product && (
							<PurchaseControl
								productId={product.id}
								productPrice={product.price}
							/>
						)}
					</div>
				</div>
				<div className="product-details-page-section related-products-section row">
					<h5>Related Products</h5>
					<RelatedProducts
						relatedKeyValue={productCategory}
						productId={productId}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: state.products.product,
	productId: ownProps.location.productId,
	relatedProducts: state.products.relatedProducts,
	productCategory: state.products.product && state.products.product.category,
});

const mapDispatchToProps = (dispatch) => ({
	getProduct: (productId) => dispatch(actions.fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
