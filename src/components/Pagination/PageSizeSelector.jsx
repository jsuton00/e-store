import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Select from '../Inputs/Select';

const PageSizeSelector = (props) => {
	const { pageSize, pageSizes, setPageSize } = props;
	return (
		<Select
			options={pageSizes}
			optionValue={pageSize}
			selectOption={(value) => setPageSize(value)}
			selectType="page-size"
		/>
	);
};

const mapStateToProps = (state) => ({
	pageSizes: state.pagination.pageSizes,
	pageSize: state.pagination.pageSize,
});

const mapDispatchToProps = (dispatch) => ({
	setPageSize: (pageSize) => dispatch(actions.setPageSize(pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSizeSelector);
