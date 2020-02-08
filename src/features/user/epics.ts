import { mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

import { MyTypes } from '../../store/store-type-helper';
import { fetchUsers } from '../../api/user-api';
import { setUsers } from './actions';

export const fetchUserEpic: MyTypes.AppEpic = action$ =>
	action$
		.ofType('user/FETCH_USERS')
		.pipe(
			mergeMap(() => from(fetchUsers()).pipe(map(users => setUsers(users))))
		);
