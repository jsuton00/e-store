import React from 'react';
import FilterMenu from '../components/Search/FilterMenu';
import SearchModal from '../components/Search/SearchModal';

export const carouselResponsiveStyle = {
	widescreen: {
		breakpoint: { max: 2560, min: 1440 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 1439, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 991, min: 464 },
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
