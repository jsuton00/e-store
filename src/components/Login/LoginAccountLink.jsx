import React from 'react';
import { AccountLoginIcon } from '../../utils/icons-import';
import { RouteLink } from '../Buttons/LinkButtons';
import '../../styles/components/buttons.css';

const LoginAccountLink = () => {
	return (
		<RouteLink linkAddress={'/login-page'} routeLinkType={'user-login-link'}>
			<span className="btn-icon user-login-icon">
				<AccountLoginIcon />
			</span>
			Login
		</RouteLink>
	);
};

export default LoginAccountLink;
