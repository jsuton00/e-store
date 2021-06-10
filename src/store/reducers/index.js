import { combineReducers } from 'redux';
import cart from './cart';
import pagination from './pagination';
import products from './products';
import search from './search';

const rootReducer = combineReducers({
	products,
	pagination,
	search,
	cart,
});

export default rootReducer;
