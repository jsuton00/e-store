import React from 'react';
import '../../styles/components/quantity-counter.css';

const QuantityCounter = (props) => {
	const { quantity, increaseQuantity, decreaseQuantity } = props;

	return (
		<div className="input-increment-row row">
			<button
				type="button"
				onClick={() => decreaseQuantity()}
				className="btn decrement-btn"
			>
				-
			</button>
			<input
				type="text"
				className="input-increment"
				value={quantity}
				readOnly
			/>
			<button
				type="button"
				onClick={() => increaseQuantity()}
				className="btn increment-btn"
			>
				+
			</button>
		</div>
	);
};

export default QuantityCounter;
