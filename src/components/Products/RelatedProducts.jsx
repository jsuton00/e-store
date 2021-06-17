import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import * as actions from '../../store/actions/index';
import { carouselResponsiveStyle } from '../../utils/componentUtils';
import ProductCards from './ProductCards';
import '../../styles/components/related-products.css';

const RelatedProducts = (props) => {
	const {
		relatedKeyValue,
		relatedProducts,
		getRelatedProducts,
		selectProduct,
		productId,
		addToCart
	} = props;

	let history = useHistory();

	useEffect(() => {
		if (relatedKeyValue && productId) {
			return getRelatedProducts(relatedKeyValue, productId);
		}
	}, [getRelatedProducts, productId, relatedKeyValue]);

	const visitProduct = (productId) => {
		if (productId) {
			selectProduct(productId);
			return history.push({
				pathname: `/products/:${productId}`,
				productId: productId,
			});
		}
	};

	return (
		<Carousel
			responsive={carouselResponsiveStyle}
			containerClass="carousel-container"
			itemClass="carousel-item-padding-40-px"
		>
			{relatedProducts.length > 0 &&
				relatedProducts.map((p, i) => {
					return (
						<ProductCards
							key={i}
							id={p.id}
							title={p.title}
							price={p.price}
							image={p.image}
							category={p.category}
							visitProduct={() => visitProduct(p.id)}
							addToCart={() => addToCart(p.id)}
						/>
					);
				})}
		</Carousel>
	);
};

const mapStateToProps = (state) => ({
	relatedProducts: state.products.relatedProducts,
	productId: state.products.productId,
});

const mapDispatchToProps = (dispatch) => ({
	getRelatedProducts: (category, productId) =>
		dispatch(actions.getRelatedProducts(category, productId)),
	selectProduct: (productId) => dispatch(actions.selectProductId(productId)),
	addToCart: (productId) => dispatch(actions.addToCart(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
