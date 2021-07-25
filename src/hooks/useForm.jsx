import { useState } from 'react';
import { validateForm } from '../utils/validate';

export const useForm = (values) => {
	const [inputValues, setInputValues] = useState(values);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(inputValues));

		if (Object.keys(errors).length === 0) {
			setIsSubmitted(true);
		} else {
			console.log(errors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		e.persist();
		setInputValues({ ...inputValues, [name]: value });
	};

	return { handleSubmit, handleChange, inputValues, errors, isSubmitted };
};
