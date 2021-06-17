import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import watchStore from './sagas';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const sagaMiddleware = createSagaMiddleware();

/* const preloadedState = loadFromLocalStorage(); */

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);

/* store.subscribe(() => saveToLocalStorage((state) => state.cart.orders)); */

sagaMiddleware.run(watchStore);
