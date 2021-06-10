import React from 'react';
import { Link } from 'react-router-dom';

export const RouteLink = ({ linkAddress, routeLinkType, children }) => {
	return (
		<Link
			to={linkAddress}
			className={`btn-link route-link-btn ${routeLinkType}`}
		>
			{children}
		</Link>
	);
};
