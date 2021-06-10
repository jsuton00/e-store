import React from 'react';
import '../../styles/components/productDetails.css';

const ProductDetails = (props) => {
	const { productImage, productTitle, productDescription, productCategory } =
		props;
	return (
		<div className="product-details">
			<div className="product-details-content row">
				<div className="product-details-content-col product-image">
					<img src={productImage} alt={productTitle} />
				</div>
				<div className="product-details-content-col product-details-body">
					<h5 className="product-details-title row">{productTitle}</h5>
					<p className="product-details-description row">
						{productDescription}
					</p>
					<p className="product-details-category row">
						<span>Category:</span>
						{productCategory}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
