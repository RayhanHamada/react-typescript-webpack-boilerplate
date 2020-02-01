import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';
import { createBrowserHistory } from 'history';
import { MyTypes } from './types';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const appliedMiddleware = applyMiddleware(
	...[thunk, routerMiddleware(history)]
);
const composeWith =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(appliedMiddleware)
		: compose(appliedMiddleware);

export const configureStore = (preloadedState: Partial<MyTypes.RootState> = {}): MyTypes.Store =>
	createStore(createRootReducer(history), preloadedState, composeWith);

// override the parameter if you desire a different initial state for your store
const store = configureStore(/*override this parameter if you desire different initial state for your store */);

export default store;
