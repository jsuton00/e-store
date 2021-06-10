import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import watchStore from './sagas';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const sagaMiddleware = createSagaMiddleware();

/* const preloadedState = loadFromLocalStorage(); */

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

/* store.subscribe(() => saveToLocalStorage((state) => state.cart.orders)); */

sagaMiddleware.run(watchStore);
