import React from 'react';
import '../../styles/components/login-form.css';

const LoginForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			id="loginForm"
			name="loginForm"
			onSubmit={handleSubmit}
			className="login-form"
		>
			<div className="login-form-group login-form-input-section row">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email address"
					className="form-input login-input"
				/>
			</div>
			<div className="login-form-group login-form-input-section row">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					className="form-input login-input"
				/>
			</div>
			<div className="login-form-group login-form-submit-section row">
				<button
					id="btnLogin"
					name="btnLogin"
					type="submit"
					className="login-btn"
				>
					Log in
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
