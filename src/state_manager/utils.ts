import { Action } from "redux";
import globalAppState from "./states";
import { ThunkDispatch } from "redux-thunk";

export interface ICustomAction extends Action<string> {
  payload?: any;
}

export type AppStateType = typeof globalAppState;

export type CustomAction = (...args: any) => ICustomAction;

// export type ThAction = ThunkAction<void, typeof allState, any, CustomAction>;
export type ThDispatch = ThunkDispatch<typeof globalAppState, any, ICustomAction>;
