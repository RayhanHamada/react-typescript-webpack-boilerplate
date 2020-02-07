import { createAction } from 'typesafe-actions';
import { User } from './user-type';

export const fetchUsers = createAction('user/FETCH_USER')();

export const setUsers = createAction('user/SET_USERS', (users: User[]) => {
	return {
		users,
	};
})();

export const resetUsers = createAction('user/RESET_USER')();
