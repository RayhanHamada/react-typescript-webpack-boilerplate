import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./counterAction";

export const asyncIncrement = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 3000);
  };
};

export const asyncDecrement = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement());
    }, 3000);
  };
};

export const asyncIncrementBy = (by: number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementBy(by));
    }, 3000);
  };
};

export const asyncDecrementBy = (by: number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrementBy(by));
    }, 3000);
  };
};
