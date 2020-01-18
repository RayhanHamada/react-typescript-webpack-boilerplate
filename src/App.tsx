import React from "react";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./state_management/actions/counterActions";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { MyTypes } from "./types";
import * as counterActions from "./state_management/actions/counterActions";
import { bindActionCreators, Dispatch } from "redux";
import store from "./state_management/store";

const App = (
  props: ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>
) => {
  return (
    <div>
      <p>It's Alllllllll Typescript !!!</p>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={() => props.incrementBy(7)}>Increment By</button>
      <button onClick={() => props.decrementBy(2)}>Decrement By</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
  bindActionCreators(
    {
      increment: counterActions.increment,
      decrement: counterActions.decrement,
      incrementBy: counterActions.incrementBy,
      decrementBy: counterActions.decrementBy
    },
    dispatch
  );

const mapStateToProps = ({ counterReducer }: MyTypes.RootState) => {
  return {
    count: counterReducer.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
