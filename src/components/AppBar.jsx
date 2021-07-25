import React from 'react';
import { Link } from 'react-router-dom';
import { useViewportContext } from '../hooks/useViewport';
import { Search } from '../utils/icons-import';
import AppBrand from './AppBrand';
import ToggleButton from './Buttons/ToggleButton';
import CartMenuButton from './Cart/CartMenuButton';
import LoginAccountLink from './Login/LoginAccountLink';
import SearchBar from './Search/SearchBar';

const AppBar = (props) => {
	const { isOpen, openCartMenu, handleToggle, handleCartMenu } = props;
	const [width] = useViewportContext();
	return (
		<div className="appbar row">
			{width < 1042 && isOpen === false && (
				<div className="appbar-section toggle-filter-menu">
					<ToggleButton
						name="toggle-filter-menu-button"
						handleToggle={handleToggle}
					>
						<Search />
					</ToggleButton>
				</div>
			)}
			<div className="appbar-section brand-section">
				<Link to="/" className="app-brand-link">
					<AppBrand />
				</Link>
			</div>
			{width < 1042 ? (
				<></>
			) : (
				<div className="appbar-section search-section">
					<SearchBar />
				</div>
			)}
			<div className="appbar-section user-controls-section row">
				<div className="user-controls user-login">
					<LoginAccountLink />
				</div>
				<div className="user-controls cart-section">
					<CartMenuButton
						handleCartMenu={handleCartMenu}
						openCartMenu={openCartMenu}
					/>
				</div>
			</div>
		</div>
	);
};

export default AppBar;
