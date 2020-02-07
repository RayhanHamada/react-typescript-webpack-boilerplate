import { ofType } from 'redux-observable';
import { MyTypes } from 'src/store/types';
import { fetchUser } from '../../api/user-fetch';
import { mergeMap, map } from 'rxjs/operators';
import { setUsers } from './actions';
import { from } from 'rxjs';
import { User } from './user-type';

export const fetchUserEpic: MyTypes.AppEpic = (action$, state$) =>
	action$.pipe(
		ofType('user/FETCH_USER'),
		mergeMap(() => from(fetchUser()).pipe(map(res => setUsers(res as User[]))))
	);
