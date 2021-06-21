import React from 'react';
import '../../styles/components/signup-form.css';

const SignUpForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form
			id="signupForm"
			name="signupForm"
			onSubmit={handleSubmit}
			className="signup-form"
		>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="firstName"
					name="firstName"
					type="text"
					placeholder="First name"
					className="form-input signup-input"
				/>
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Last name"
					className="form-input signup-input"
				/>
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email address"
					className="form-input signup-input"
				/>
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					className="form-input signup-input"
				/>
			</div>
			<div className="signup-form-group signup-form-submit-section row">
				<button
					id="btnSignup"
					name="btnSignup"
					type="submit"
					className="signup-btn"
				>
					Log in
				</button>
			</div>
		</form>
	);
};

export default SignUpForm;
