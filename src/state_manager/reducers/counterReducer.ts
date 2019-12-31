import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from "../actionTypes";
import { ICustomAction } from "./../utils";
import { counterState } from "./../states";

export default (
  state = counterState,
  { type, payload }: ICustomAction
): typeof counterState => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case INCREMENT_BY:
      return {
        ...state,
        count: state.count + payload.by
      };
    case DECREMENT_BY:
      return {
        ...state,
        count: state.count - payload.by
      };
    default:
      return state;
  }
};
