import { configureStore } from './../../src/store';
import {
	increment,
	decrement,
} from '../../src/features/counter/counterActions';
import { MyTypes } from '../../src/store/types';

describe('Counter Reducer', () => {
	let store: MyTypes.Store = configureStore();

	beforeEach(() => {
		store = configureStore();
	});

	it('should increment by 1', () => {
		// get current count
		const beforeCount = store.getState().counterReducer.count;

		// dispatch increment action
		store.dispatch(increment());

		const afterCount = store.getState().counterReducer.count;

		expect(afterCount).toBe(beforeCount + 1);
	});

	it('should be decremented by 1', () => {
		// get current count
		const beforeCount = store.getState().counterReducer.count;

		// dispatch increment action
		store.dispatch(decrement());

		const afterCount = store.getState().counterReducer.count;

		expect(afterCount).toBe(beforeCount - 1);
	});
});
