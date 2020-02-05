import { StateType, ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';

declare namespace MyTypes {
	export type Store = StateType<typeof import('.').default>;
	export type RootAction = ActionType<typeof import('./root-action').default>;
	export type RootState = StateType<
		ReturnType<typeof import('./root-reducer').default>
	>;

	export type AppDispatch = Dispatch<RootAction>;
}

declare module 'typesafe-actions' {
	export interface Types {
		RootAction: ActionType<typeof import('./root-action').default>;
		RootState: StateType<ReturnType<typeof import('./root-reducer').default>>;
		Store: StateType<typeof import('.').default>;
	}
}
