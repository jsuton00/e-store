import React from 'react';
import { AccountLoginIcon } from '../../utils/icons-import';
import { RouteLink } from '../Buttons/LinkButtons';

const LoginAccountLink = () => {
	return (
		<RouteLink linkAddress="/account/login" routeLinkType="user-login-link">
			<span className="btn-icon user-login-icon">
				<AccountLoginIcon />
			</span>
			Login
		</RouteLink>
	);
};

export default LoginAccountLink;
