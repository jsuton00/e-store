import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export const PreviousPageButton = (props) => {
	const { clickPrevious, currentPage, startPage } = props;
	let history = useHistory();

	const handleClick = () => {
		if (currentPage > startPage) {
			clickPrevious();
			return history.goBack() === history.push(`?page=${currentPage - 1}`);
		} else {
			return history.push(`?page=${startPage}`);
		}
	};
	return (
		<button
			type="button"
			className="btn btn-link page-link"
			onClick={handleClick}
		>
			Previous
		</button>
	);
};

export const NextPageButton = (props) => {
	const { clickNext, currentPage, endPage } = props;

	let history = useHistory();

	const handleClick = () => {
		if (currentPage < endPage) {
			clickNext();
			return history.push(`/?page=${currentPage + 1}`);
		} else {
			return history.push(`/?page=${endPage}`);
		}
	};
	return (
		<button
			type="button"
			className="btn btn-link page-link"
			onClick={handleClick}
		>
			Next
		</button>
	);
};

export const PageNumberButton = (props) => {
	const { pageNumber, clickPageNumber } = props;
	const pageNumberRef = useRef();
	let history = useHistory();

	const handleClick = (e) => {
		if (e.target.value === pageNumberRef.current.value) {
			clickPageNumber(e.target.value);
			if (e.target.value > 1) {
				return history.push(`?page=${e.target.value}`);
			} else {
				return history.push(`/`);
			}
		}
	};
	return (
		<li className="page-item">
			<button
				ref={pageNumberRef}
				type="button"
				className="btn btn-link page-link"
				onClick={handleClick}
				value={pageNumber}
			>
				{pageNumber}
			</button>
		</li>
	);
};
