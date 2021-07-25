import React from 'react';
import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';
import CloseButton from '../Buttons/CloseButton';

const SearchModal = (props) => {
	const { handleClose } = props;
	return (
		<div className="search-modal">
			<div className="search-modal-header row">
				<SearchBar /> <CloseButton handleClose={handleClose} />
			</div>
			<div className="search-modal-filter">
				<FilterMenu />
			</div>
		</div>
	);
};

export default SearchModal;
