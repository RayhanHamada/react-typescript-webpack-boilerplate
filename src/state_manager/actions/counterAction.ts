import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from "../actionTypes";
import { CustomAction } from "./../utils";

export const increment: CustomAction = () => {
  return {
    type: INCREMENT
  };
};

export const decrement: CustomAction = () => {
  return {
    type: DECREMENT
  };
};

export const incrementBy: CustomAction = (by: number) => {
  return {
    type: INCREMENT_BY,
    payload: {
      by
    }
  };
};

export const decrementBy: CustomAction = (by: number) => {
  return {
    type: DECREMENT_BY,
    payload: {
      by
    }
  };
};
