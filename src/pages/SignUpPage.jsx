import React from 'react';
import { RouteLink } from '../components/Buttons/LinkButtons';
import SignUpForm from '../components/Login/SignUpForm';
import '../styles/pages/signup-page.css';

const SignUpPage = () => {
	return (
		<div className="signup-page container-fluid">
			<div className="signup-page-content">
				<div className="signup-page-section signup-form-section row">
					<div className="signup-form-container">
						<h3 className="signup-form-title row">Create an Account</h3>
						<SignUpForm />
					</div>
				</div>
				<div className="signup-page-section switch-account-form-links row">
					<div className="registered-user-link">
						<RouteLink
							linkAddress="/account/login"
							routeLinkType="account-form-btn-link"
						>
							Registered users
						</RouteLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
