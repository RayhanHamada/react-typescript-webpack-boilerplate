import { CHANGE_NAME, CAPITALIZE_ALL } from "../actionTypes";
import { userState } from "./../states";
import { ICustomAction } from "./../utils";

export default (
  state = userState,
  { type, payload }: ICustomAction
): typeof userState => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload.name
      };
    case CAPITALIZE_ALL:
      return {
        ...state,
        name: (state.name as string).toUpperCase()
      };
    default:
      return state;
  }
};
