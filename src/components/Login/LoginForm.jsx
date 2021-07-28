import React, { useState } from 'react';
import { validateLoginForm } from '../../utils/validate';

const LoginForm = () => {
	const [loginData, setLoginData] = useState({ email: '', password: '' });
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setLoginData({ ...loginData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateLoginForm(loginData));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
		} else {
			console.log(errors);
		}
	};
	return (
		<form
			id="loginForm"
			name="loginForm"
			onSubmit={handleSubmit}
			className="form login-form"
		>
			<div className="form-input-section">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email address"
					className="form-input login-input"
					onChange={handleChange}
					value={loginData.email}
					autoComplete="email"
				/>
				{errors.email && isSubmitted === true && (
					<p className="invalid-feedback">{errors.email}</p>
				)}
			</div>
			<div className="form-input-section">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					value={loginData.password}
					className="form-input login-input"
					autoComplete="current-password"
				/>
				{errors.password && isSubmitted === true && (
					<p className="invalid-feedback">{errors.password}</p>
				)}
			</div>
			<div className="form-submit-section">
				<button
					id="btnLogin"
					name="btnLogin"
					type="submit"
					className="btn btn-submit btn-form-submit"
				>
					Log in
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
