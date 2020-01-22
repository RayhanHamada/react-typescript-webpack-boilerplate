import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { MyTypes } from '../types';

const appliedMiddleWare = applyMiddleware(...[thunk]);

const composeWith =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(appliedMiddleWare)
		: compose(appliedMiddleWare);

const initialRootState: Partial<MyTypes.RootState> = {};

const store = createStore(rootReducer, initialRootState, composeWith);

export default store;
