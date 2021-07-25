import { combineReducers } from 'redux';
import cart from './cart';
import pagination from './pagination';
import products from './products';
import search from './search';
import auth from './auth';

const rootReducer = combineReducers({
	products,
	pagination,
	search,
	cart,
	auth,
});

export default rootReducer;
