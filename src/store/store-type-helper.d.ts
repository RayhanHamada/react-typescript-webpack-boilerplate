import { ActionType, StateType } from 'typesafe-actions';
import { Dispatch } from 'react';
import { Epic } from 'redux-observable';

declare namespace MyTypes {
	type RootAction = ActionType<typeof import('./root-action').default>;
	type RootState = StateType<typeof import('./root-reducer').default>;
	type Store = StateType<typeof import('.').default>;
	type AppDispatch = Dispatch<RootAction>;
	type AppEpic = Epic<RootAction, RootAction, RootState>;
}
