import React from 'react';

const ToggleButton = (props) => {
	const { name, handleToggle, children } = props;

	return (
		<button
			type="button"
			className={`toggle-button ${name}`}
			onClick={() => handleToggle()}
		>
			<span className="btn-icon toggle-button-icon">{children}</span>
		</button>
	);
};

export default ToggleButton;
