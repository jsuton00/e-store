import React, { useEffect } from 'react';
import { FilterCheckbox } from '../Inputs/Checkbox';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const FilterCategories = (props) => {
	const {
		categories,
		checkedCategories,
		getProductCategories,
		selectCategory,
		filterByCategories,
	} = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			getProductCategories();
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [getProductCategories]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (checkedCategories.length > 0) {
				filterByCategories(checkedCategories);
			}
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [checkedCategories, filterByCategories]);

	return (
		<>
			{categories.length > 0 &&
				categories.map((category, index) => {
					return (
						<div key={index} className="checkbox-row row">
							<FilterCheckbox
								id={index}
								checkboxName={category}
								checkboxValue={category}
								filterCheckboxUse={'filter-category'}
								clickCheckbox={(checked) => selectCategory(category, checked)}
							/>
						</div>
					);
				})}
		</>
	);
};

const mapStateToProps = (state) => ({
	categories: state.products.categories,
	checkedCategories: state.products.checkedCategories,
});

const mapDispatchToProps = (dispatch) => ({
	getProductCategories: () => dispatch(actions.fetchProductCategories()),
	selectCategory: (category, checked) =>
		dispatch(actions.checkCategory(category, checked)),
	filterByCategories: (categories) =>
		dispatch(actions.filterByCategories(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategories);
