import { createReducer, action } from "typesafe-actions";
import { combineReducers, Reducer } from "redux";
import { increment } from "../actions/counterActions";
import { MyTypes } from "../../types";

const initialState = {
  count: 0
};

const counterReducer = createReducer(initialState)
  .handleType("INCREMENT", (state, action) => {
    return {
      ...state,
      count: state.count + 1
    };
  })

  .handleType("DECREMENT", (state, action) => {
    return {
      ...state,
      count: state.count - 1
    };
  })

  .handleType("INCREMENT_BY", (state, action) => {
    return {
      ...state,
      count: state.count + action.payload.by
    };
  })

  .handleType("DECREMENT_BY", (state, action) => {
    return {
      ...state,
      count: state.count - action.payload.by
    };
  });

export default counterReducer;
