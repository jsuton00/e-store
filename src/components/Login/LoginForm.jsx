import React from 'react';
import { useForm } from '../../hooks/useForm';

const LoginForm = () => {
	const { inputValues, handleChange, handleSubmit, errors } = useForm({
		email: '',
		password: '',
	});

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
					onChange={handleChange}
					value={inputValues.email}
					autoComplete="email"
				/>
				{errors.email && <p className="invalid-feedback">{errors.email}</p>}
			</div>
			<div className="login-form-group login-form-input-section row">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					value={inputValues.password}
					className="form-input login-input"
					autoComplete="current-password"
				/>
				{errors.password && (
					<p className="invalid-feedback">{errors.password}</p>
				)}
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
