import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../styles/components/sort.css';
import Select from '../Inputs/Select';
import * as actions from '../../store/actions/index';

const Sort = (props) => {
	const {
		totalItems,
		startIndex,
		endIndex,
		sortOptions,
		sortOption,
		selectOption,
		sortByName,
		sortByPrice,
	} = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			if (sortOption) {
				sortByName(sortOption);
				sortByPrice(sortOption);
			}
		}, 800);
		return () => {
			clearTimeout(timer);
		};
	}, [sortByName, sortByPrice, sortOption]);

	return (
		<div className="sort-products-container row">
			<div className="sort-products-section product-counter-section">
				<p className="product-counter-text">
					Products: {`${startIndex + 1}-${endIndex + 1} of ${totalItems}`}
				</p>
			</div>
			<div className="sort-products-section sort-products">
				<Select
					options={sortOptions}
					optionValue={sortOption}
					selectType="products"
					selectOption={(value) => selectOption(value)}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sortOptions: state.products.sortProductsOptions,
	sortOption: state.products.sortProductsOption,
	totalItems: state.pagination.totalItems,
	startIndex: state.pagination.startIndex,
	endIndex: state.pagination.endIndex,
});

const mapDispatchToProps = (dispatch) => ({
	selectOption: (value) => dispatch(actions.selectOption(value)),
	sortByName: (value) => dispatch(actions.sortByName(value)),
	sortByPrice: (value) => dispatch(actions.sortByPrice(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
