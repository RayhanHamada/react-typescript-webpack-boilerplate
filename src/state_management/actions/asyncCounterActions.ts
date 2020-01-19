import { createAsyncAction } from 'typesafe-actions';

export const asyncIncrement = createAsyncAction('INCREMENT', '', '')();

export const asyncDecrement = createAsyncAction('DECREMENT', '', '')();
