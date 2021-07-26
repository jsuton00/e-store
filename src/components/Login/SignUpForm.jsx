import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { validateForm } from '../../utils/validate';

const SignUpForm = (props) => {
	const { userData, setUser, register } = props;
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(userData));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
			if (
				userData.firstName.length > 0 &&
				userData.lastName.length > 0 &&
				userData.email.length > 0 &&
				userData.password.length > 0
			) {
				register({
					firstName: userData.firstName,
					lastName: userData.lastName,
					email: userData.email,
					password: userData.password,
				});
			}
		} else {
			console.log(errors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setUser({ ...userData, [name]: value });
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
					onChange={handleChange}
					className="form-input signup-input"
					values={userData.firstName}
				/>
				{isSubmitted && errors.firstName && (
					<p className="invalid-feedback">{errors.firstName}</p>
				)}
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Last name"
					onChange={handleChange}
					className="form-input signup-input"
					value={userData.lastName}
				/>
				{isSubmitted && errors.lastName && (
					<p className="invalid-feedback">{errors.lastName}</p>
				)}
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email address"
					onChange={handleChange}
					className="form-input signup-input"
					value={userData.email}
					autoComplete="email"
				/>
				{isSubmitted && errors.email && (
					<p className="invalid-feedback">{errors.email}</p>
				)}
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					className="form-input signup-input"
					value={userData.password}
					autoComplete="new-password"
				/>
				{isSubmitted && errors.password && (
					<p className="invalid-feedback">{errors.password}</p>
				)}
			</div>
			<div className="signup-form-group signup-form-input-section row">
				<input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					placeholder="Confirm your password"
					className="form-input signup-input"
					onChange={handleChange}
					value={userData.confirmPassword}
					autoComplete="repeated-password"
				/>
				{isSubmitted && errors.confirmPassword && (
					<p className="invalid-feedback">{errors.confirmPassword}</p>
				)}
			</div>
			<div className="signup-form-group signup-form-submit-section row">
				<button
					id="btnSignup"
					name="btnSignup"
					type="submit"
					className="signup-btn"
				>
					Sign up
				</button>
			</div>
		</form>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	userData: state.auth.userData,
});

const mapDispatchToProps = (dispatch) => ({
	register: (user) => dispatch(actions.registerUser(user)),
	setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
