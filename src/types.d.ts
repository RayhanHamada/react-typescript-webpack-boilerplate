import { StateType, ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';

declare namespace MyTypes {
	export type RootAction = ActionType<
		typeof import('./store/rootAction').default
	>;
	export type RootState = StateType<
		ReturnType<typeof import('./store/rootReducer').default>
	>;
	export type Store = StateType<ReturnType<typeof import('./store').default>>;

	export type MyDispatch = Dispatch<RootAction>;
}

declare module 'typesafe-actions' {
	export interface Types {
		RootAction: ActionType<typeof import('./store/rootAction').default>;
		RootState: StateType<
			ReturnType<typeof import('./store/rootReducer').default>
		>;
		Store: StateType<ReturnType<typeof import('./store').default>>;
	}
}
