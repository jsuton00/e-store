import React, { useRef } from 'react';

export const FilterCheckbox = (props) => {
	const { checboxValue, checkboxName, filterCheckboxUse, clickCheckbox } =
		props;

	const checkboxRef = useRef();

	const handleClick = (e) => {
		if (e.target.checked === checkboxRef.current.value) {
			return clickCheckbox(e.target.checked);
		} else {
			return clickCheckbox(false);
		}
	};

	return (
		<label>
			<input
				ref={checkboxRef}
				type="checkbox"
				className={`checkbox filter-checkbox ${filterCheckboxUse}`}
				onClick={handleClick}
				value={checboxValue}
			/>
			{checkboxName}
		</label>
	);
};
