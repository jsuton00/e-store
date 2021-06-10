import React from 'react';
import FilterCategories from './FilterCategories';
import PriceRanges from './PriceRanges';
import '../../styles/components/filter-menu.css';

const FilterMenu = () => {
	return (
		<div className="filter-menu list-group">
			<h5 className="filter-section-title">Filters:</h5>
			<div className="filter-controls-section checkbox-section list-group-item">
				<h5 className="filter-section-title">Category:</h5>
				<FilterCategories />
			</div>
			<div className="filter-controls-section input-range-section list-group-item">
				<h5 className="filter-section-title">Price:</h5>
				<PriceRanges />
			</div>
		</div>
	);
};

export default FilterMenu;
