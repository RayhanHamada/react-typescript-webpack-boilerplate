import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { MyTypes } from './types';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';

export const epicMiddleware = createEpicMiddleware<
	MyTypes.RootAction,
	MyTypes.RootAction,
	MyTypes.RootState
>();

const appliedMiddleWare = applyMiddleware(...[epicMiddleware]);

const composeWith =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(appliedMiddleWare)
		: compose(appliedMiddleWare);

const initialRootState: Partial<MyTypes.RootState> = {};

const store = createStore(rootReducer, initialRootState, composeWith);

epicMiddleware.run(rootEpic);

export default store;
