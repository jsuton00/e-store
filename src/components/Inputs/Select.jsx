import React, { useRef } from 'react';

const Select = ({ options, optionValue, selectOption, selectType }) => {
	const selectRef = useRef();

	const handleChange = (e) => {
		if (e.target.value === selectRef.current.value) {
			return selectOption(e.target.value);
		}
	};

	return (
		<div className={`select-${selectType}-container select-container`}>
			<select
				ref={selectRef}
				name={`select-${selectType}`}
				className={`select-${selectType}`}
				onChange={handleChange}
				value={optionValue}
			>
				{options.length > 0 &&
					options.map((o, i) => {
						return (
							<option key={i} value={o}>
								{o}
							</option>
						);
					})}
			</select>
			{selectType === 'page-size' ? 'per page' : ''}
		</div>
	);
};

export default Select;
