import { combineEpics } from 'redux-observable';

import * as counterEpics from '../features/counter/epics';
import * as userEpics from '../features/user/epics';

export default combineEpics(
	...Object.values(counterEpics),
	...Object.values(userEpics)
);
