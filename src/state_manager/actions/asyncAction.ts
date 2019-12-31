import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./counterAction";
import allState from "./../states";
import { ThDispatch } from "./../utils";

export const asyncIncrement = () => {
  return (dispatch: ThDispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 3000);
  };
};

export const asyncDecrement = () => {
  return (dispatch: ThDispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 3000);
  };
};

export const asyncIncrementBy = (by: number) => {
  return (dispatch: ThDispatch) => {
    setTimeout(() => {
      dispatch(incrementBy(by));
    }, 3000);
  };
};

export const asyncDecrementBy = (by: number) => {
  return (dispatch: ThDispatch) => {
    setTimeout(() => {
      dispatch(decrementBy(by));
    }, 3000);
  };
};
