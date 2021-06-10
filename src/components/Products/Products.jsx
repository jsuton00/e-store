import React, { useEffect } from 'react';
import ProductCards from './ProductCards';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import '../../styles/components/products.css';
import { useHistory } from 'react-router';

const Products = (props) => {
	const {
		products,
		currentPage,
		pageSize,
		shownData,
		loadPages,
		getProducts,
		selectProduct,
		addToCart,
	} = props;

	let history = useHistory();

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (products) {
				return loadPages(products, currentPage, pageSize);
			}
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [currentPage, loadPages, pageSize, products]);

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
		<div className="products-listings-container">
			{shownData.length > 0 &&
				shownData.map((p, i) => {
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
		</div>
	);
};

const mapStateToProps = (state) => ({
	products: state.products.filteredProducts,
	productId: state.products.productId,
	shownData: state.pagination.shownData,
	currentPage: state.pagination.currentPage,
	pageSize: state.pagination.pageSize,
});

const mapDispatchToProps = (dispatch) => ({
	getProducts: () => dispatch(actions.fetchProducts()),
	loadPages: (products, currentPage, pageSize) =>
		dispatch(actions.loadPages(products, currentPage, pageSize)),
	selectProduct: (productId) => dispatch(actions.selectProductId(productId)),
	addToCart: (productId) => dispatch(actions.addToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
