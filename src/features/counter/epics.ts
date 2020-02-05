import { Epic, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { MyTypes } from 'src/store/types';
import { increment } from './actions';

export const asyncIncrement: Epic<
	MyTypes.RootAction,
	MyTypes.RootAction,
	MyTypes.RootState
> = (action$, state$) =>
	action$.pipe(
		ofType('counter/ASYNC_INCREMENT'),
		delay(2000),
		mapTo(increment())
	);
