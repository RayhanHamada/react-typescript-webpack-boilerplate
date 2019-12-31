import { INCREMENT, DECREMENT, INCREMENT_BY, DECREMENT_BY } from "../actionTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const incrementBy = (by: number) => {
  return {
    type: INCREMENT_BY,
    payload: {
      by
    }
  };
};

export const decrementBy = (by: number) => {
    return {
      type: DECREMENT_BY,
      payload: {
        by
      }
    };
  };