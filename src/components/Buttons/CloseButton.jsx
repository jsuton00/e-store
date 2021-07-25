import React from 'react';
import { CloseIcon } from '../../utils/icons-import';

const CloseButton = (props) => {
	const { handleClose } = props;

	const handleClick = () => {
		return handleClose();
	};
	return (
		<button type="button" className="close-button" onClick={handleClick}>
			<CloseIcon />
		</button>
	);
};

export default CloseButton;
