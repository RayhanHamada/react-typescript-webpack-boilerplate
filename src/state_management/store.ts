import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { MyTypes } from '../types';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const combinedMiddleWare = [thunk, routerMiddleware(history)];

const initialRootState: Partial<MyTypes.RootState> = {};

const configureStore = (
	preloadedState: Partial<MyTypes.RootState> = initialRootState
) => {
	return createStore(
		createRootReducer(history),
		preloadedState,
		composeWithDevTools(applyMiddleware(...combinedMiddleWare))
	);
};

export default configureStore;
