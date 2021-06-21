import React from 'react';
import { RouteLink } from '../components/Buttons/LinkButtons';
import LoginForm from '../components/Login/LoginForm';
import '../styles/pages/login-page.css';

const LoginPage = () => {
	return (
		<div className="login-page container-fluid">
			<div className="login-page-content">
				<div className="login-page-section login-form-section row">
					<div className="login-form-container">
						<h3 className="login-form-title">Login</h3>
						<LoginForm />
					</div>
				</div>
				<div className="login-page-section switch-account-form-link row">
					<div className="create-account-link">
						<RouteLink
							linkAddress="/account/create"
							routeLinkType="account-form-btn-link"
						>
							<span>Create an account</span>
						</RouteLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
