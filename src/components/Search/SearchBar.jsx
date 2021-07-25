import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Search } from '../../utils/icons-import';

const SearchBar = (props) => {
	const { searchTerm, setSearchTerm, searchProducts } = props;
	const searchRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm === searchRef.current.value) {
				return searchTerm.length > 0 && searchProducts(searchTerm);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [searchProducts, searchTerm]);

	const handleChange = (e) => {
		return setSearchTerm(e.target.value);
	};

	return (
		<div className="search-bar">
			<span className="search-icon">
				<Search />
			</span>
			<input
				ref={searchRef}
				id="search-input"
				name="search-input"
				type="text"
				className="search-input"
				placeholder="Search products..."
				onChange={handleChange}
				value={searchTerm}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	searchTerm: state.search.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
	setSearchTerm: (searchTerm) => dispatch(actions.setSearchTerm(searchTerm)),
	searchProducts: (searchTerm) => dispatch(actions.searchProducts(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
