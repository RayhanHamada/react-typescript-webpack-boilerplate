import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from "./../actionTypes";

// The state of counter
const initialState = {
  count: 0,
  count2: 0
};

// The code ": typeof initialState" just simply means we want this exported arrow function
// to return an object with same fields as the initialState Object.
// the purpose of this code is just to force vscode auto-complete for fields in the initialState,
// in case you have many actions case, so you don't have to scroll up to see what field you want to mutate.
// if you don't like it or desire it, just delete ": typeof initialState", and it will work fine as before.
export default (state = initialState, action): typeof initialState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        // if you're not understand what i'm talking about, go to the line below, and hit ctrl + space.

        // see ? useful right ?
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
        count: state.count + action.payload.by
      };
    case DECREMENT_BY:
      return {
        ...state,
        count: state.count - action.payload.by
      };
    default:
      return state;
  }
};
