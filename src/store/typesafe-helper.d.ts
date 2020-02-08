import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
	export interface Types {
		RootAction: ActionType<typeof import('./root-action').default>;
		RootState: StateType<typeof import('./root-reducer').default>;
		Store: StateType<typeof import('.').default>;
	}
}
