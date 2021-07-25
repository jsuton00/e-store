import React from 'react';
import { connect } from 'react-redux';
import {
	NextPageButton,
	PageNumberButton,
	PreviousPageButton,
} from './PageItemLink';
import * as actions from '../../store/actions/index';

const Pagination = (props) => {
	const {
		pages,
		currentPage,
		startPage,
		endPage,
		clickPreviousPage,
		clickNextPage,
		clickPage,
	} = props;

	return (
		<ul className="pagination">
			<li className="page-item">
				<PreviousPageButton
					currentPage={currentPage}
					startPage={startPage}
					clickPrevious={() => clickPreviousPage()}
				/>
			</li>
			<>
				{pages.length > 0 &&
					pages.map((page, index) => {
						return (
							<PageNumberButton
								key={index}
								pageNumber={page}
								clickPageNumber={() => clickPage(page)}
							/>
						);
					})}
			</>
			<li className="page-item">
				<NextPageButton
					currentPage={currentPage}
					endPage={endPage}
					clickNext={() => clickNextPage()}
				/>
			</li>
		</ul>
	);
};

const mapStateToProps = (state) => ({
	pages: state.pagination.pages,
	currentPage: state.pagination.currentPage,
	startPage: state.pagination.startPage,
	endPage: state.pagination.endPage,
});

const mapDispatchToProps = (dispatch) => ({
	clickPreviousPage: () => dispatch(actions.loadPreviousPage()),
	clickNextPage: () => dispatch(actions.loadNextPage()),
	clickPage: (page) => dispatch(actions.loadSelectedPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
