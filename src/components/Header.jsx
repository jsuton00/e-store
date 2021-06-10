import React from 'react';
import '../styles/components/header.css';
import AppBar from './AppBar';
import CartMenu from './Cart/CartMenu';

const Header = (props) => {
	const { openCartMenu, closeCartMenu } = props;
	return (
		<header id="header" className="header">
			<div className="header-content">
				<AppBar {...props} />
			</div>
			{openCartMenu === true ? (
				<CartMenu closeCartMenu={closeCartMenu} />
			) : (
				<></>
			)}
		</header>
	);
};

export default Header;
