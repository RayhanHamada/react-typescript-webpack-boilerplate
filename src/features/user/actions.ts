import { createAction } from 'typesafe-actions';

export const fetchUsers = createAction('user/FETCH_USERS')();

export const setUsers = createAction(
	'user/SET_USERS',
	(users: AppFeatures.User[]) => users
)();

export const resetUsers = createAction('user/RESET_USERS')();
