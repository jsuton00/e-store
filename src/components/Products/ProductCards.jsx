import React, { useRef } from 'react';
import AddtoCart from '../Cart/AddtoCart';

const ProductCards = (props) => {
	const { id, title, price, image, category, visitProduct, addToCart } = props;

	const cardRef = useRef();

	const handleClick = (e) => {
		if (e.target.value === cardRef.current.value) {
			return visitProduct(e.target.value);
		}
	};

	return (
		<div
			ref={cardRef}
			id={`product-card-${id}`}
			className="product-card card"
			onClick={handleClick}
			value={id}
		>
			<div className="card-image-placeholder row">
				<img src={image} alt={title} className="product-card-image" />
			</div>
			<div className="product-card-body card-body">
				<h5 className="product-card-title card-title">{title}</h5>
				<p className="product-card-price card-text">{`€${price}`}</p>
				<p className="product-card-category card-text">{category}</p>
			</div>
			<div className="product-card-footer card-footer">
				<AddtoCart addToCart={addToCart} productId={id} />
			</div>
		</div>
	);
};

export default ProductCards;
