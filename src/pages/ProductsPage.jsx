import React from 'react';
import PageSizeSelector from '../components/Pagination/PageSizeSelector';
import Pagination from '../components/Pagination/Pagination';
import Products from '../components/Products/Products';
import Sort from '../components/Search/Sort';
import { useViewportContext } from '../hooks/useViewport';
import { showOrHideComponent } from '../utils/componentUtils';
import '../styles/pages/products-page.css';

const ProductsPage = (props) => {
	const { openValue } = props;
	const [width] = useViewportContext();
	return (
		<div id="products-page" className="products-page container-fluid">
			<div className="products-page-content row">
				{showOrHideComponent(width, openValue)}
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
