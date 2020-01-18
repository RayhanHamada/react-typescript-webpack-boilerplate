import { StateType, ActionType } from "typesafe-actions";

declare namespace MyTypes {
  export type RootAction = ActionType<
    typeof import("./state_management/actions").default
  >;
  export type RootState = StateType<
    typeof import("./state_management/reducers").default
  >;
  export type Store = StateType<
    typeof import("./state_management/store").default
  >;
}

declare module "typesafe-actions" {
  export interface Types {
    RootAction: ActionType<typeof import("./state_management/actions").default>;
    RootState: StateType<typeof import("./state_management/reducers").default>;
    Store: StateType<typeof import("./state_management/store").default>;
  }
}
