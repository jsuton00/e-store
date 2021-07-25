import React from 'react';
import FilterMenu from '../components/Search/FilterMenu';
import SearchModal from '../components/Search/SearchModal';

export const carouselResponsiveStyle = {
	widescreen: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export const showOrHideComponent = (width, isOpen, handleClose) => {
	if (width < 1042) {
		if (isOpen === true) {
			return <SearchModal handleClose={handleClose} />;
		} else if (isOpen === false) {
			return <></>;
		}
	} else {
		return (
			<div className="products-page-section filter-menu-section">
				<FilterMenu />
			</div>
		);
	}
};
