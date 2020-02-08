import { combineReducers } from 'redux';

import counterReducer from '../features/counter/reducer';
import userReducer from '../features/user/reducer';

export default combineReducers({
	counterReducer,
	userReducer,
});
