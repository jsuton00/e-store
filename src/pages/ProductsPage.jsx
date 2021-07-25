import React from 'react';
import PageSizeSelector from '../components/Pagination/PageSizeSelector';
import Pagination from '../components/Pagination/Pagination';
import Products from '../components/Products/Products';
import Sort from '../components/Search/Sort';
import { useViewportContext } from '../hooks/useViewport';
import { showOrHideComponent } from '../utils/componentUtils';

const ProductsPage = (props) => {
	const { openValue, handleClose } = props;
	const [width] = useViewportContext();
	return (
		<div id="products-page" className="page products-page container-fluid">
			<div className="page-content products-page-content row">
				{showOrHideComponent(width, openValue, handleClose)}
				<div className="products-page-section products-listing-section">
					<Sort />
					<Products />
					{
						<nav
							id="pagination"
							role="navigation"
							className="products-pagination-row row"
						>
							<Pagination />
							<PageSizeSelector />
						</nav>
					}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
