import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const PriceRanges = (props) => {
	const {
		minValue,
		maxValue,
		minDefaultValue,
		maxDefaultValue,
		setMinValue,
		setMaxValue,
		filterByPrices,
	} = props;

	const minInputRef = useRef();
	const maxInputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (
				minValue === minInputRef.current.value &&
				maxValue === maxInputRef.current.value
			) {
				return filterByPrices(minValue, maxValue);
			}
		}, 800);
		return () => {
			clearTimeout(timer);
		};
	}, [filterByPrices, maxValue, minValue]);

	const handleChangeMinValue = (e) => {
		return setMinValue(e.target.value);
	};

	const handleChangeMaxValue = (e) => {
		setMaxValue(e.target.value);
	};

	return (
		<div className="price-range-container">
			<div className="price-range-input-row row">
				<div className="price-range-input">
					<input
						ref={minInputRef}
						id="min-input"
						name="min-input"
						type="text"
						className="price-min-range"
						placeholder={minDefaultValue}
						onChange={handleChangeMinValue}
						value={minValue}
					/>
				</div>
				to
				<div className="price-range-input">
					<input
						ref={maxInputRef}
						type="text"
						className="price-max-range"
						placeholder={maxDefaultValue}
						onChange={handleChangeMaxValue}
						value={maxValue}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	minValue: state.products.minValue,
	maxValue: state.products.maxValue,
	minDefaultValue:
		Math.min(...state.products.products.map((p) => p.price)) || 0,
	maxDefaultValue:
		Math.max(...state.products.products.map((p) => p.price)) ||
		state.products.maxValue,
});

const mapDispatchToProps = (dispatch) => ({
	setMinValue: (value) => dispatch(actions.setMinInputValue(value)),
	setMaxValue: (value) => dispatch(actions.setMaxInputValue(value)),
	filterByPrices: (minValue, maxValue) =>
		dispatch(actions.filterByPrices(minValue, maxValue)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PriceRanges);
