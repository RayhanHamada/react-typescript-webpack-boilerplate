import { StateType, ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';

declare namespace MyTypes {
	export type RootAction = ActionType<
		typeof import('./rootAction').default
	>;
	export type RootState = StateType<
		ReturnType<typeof import('./rootReducer').default>
	>;
	export type Store = StateType<ReturnType<typeof import('.').default>>;

	export type AppDispatch = Dispatch<RootAction>;
}

declare module 'typesafe-actions' {
	export interface Types {
		RootAction: ActionType<typeof import('./rootAction').default>;
		RootState: StateType<
			ReturnType<typeof import('./rootReducer').default>
		>;
		Store: StateType<ReturnType<typeof import('.').default>>;
	}
}
