import { createReducer } from 'typesafe-actions';

const initState: AppFeatures.User[] = [];

export default createReducer(initState)
	.handleType('user/SET_USERS', (state, action) => action.payload)

	.handleType('user/RESET_USERS', () => [] as AppFeatures.User[]);
