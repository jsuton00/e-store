import React from 'react';
import AppBar from './AppBar';
import CartMenu from './Cart/CartMenu';

const Header = (props) => {
	const { openCartMenu, closeCartMenu } = props;
	return (
		<header id="header" className="header container-fluid">
			<div className="header-content container">
				<AppBar {...props} />
			</div>
			{openCartMenu === true && <CartMenu closeCartMenu={closeCartMenu} />}
		</header>
	);
};

export default Header;
