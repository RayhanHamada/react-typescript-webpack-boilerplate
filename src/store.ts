import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
