import { combineEpics } from 'redux-observable';

import * as counterEpics from '../features/counter/epics';

export default combineEpics(...Object.values(counterEpics));
