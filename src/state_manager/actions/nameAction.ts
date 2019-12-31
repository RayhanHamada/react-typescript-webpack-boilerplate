import { CHANGE_NAME, CAPITALIZE_ALL } from "../actionTypes";
import { userState } from "./../states";
import { CustomAction } from "./../utils";

export const changeName: CustomAction = (name: string) => {
  return {
    type: CHANGE_NAME,
    payload: {
      name
    }
  };
};

export const capitalizeAll: CustomAction = () => {
  return {
    type: CAPITALIZE_ALL
  };
};
