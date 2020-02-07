import { createReducer } from 'typesafe-actions';
import { User } from './user-type';

const initState: User[] = [];

export default createReducer(initState)
	.handleType('user/SET_USERS', (state, action) => {
		return [...action.payload.users];
	})

	.handleType('user/RESET_USER', () => {
		return [];
	});
