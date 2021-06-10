import React from 'react';
import { CloseIcon } from '../../utils/icons-import';

const CloseButton = (props) => {
	const { handleClose } = props;
	return (
		<button
			type="button"
			className="close-button"
			onClick={() => handleClose()}
		>
			<CloseIcon />
		</button>
	);
};

export default CloseButton;
