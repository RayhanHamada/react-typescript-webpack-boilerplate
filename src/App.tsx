import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./state_manager/actions/counterAction";
import { capitalizeAll } from "./state_manager/actions/nameAction";
import {
  asyncIncrement,
  asyncDecrement
} from "./state_manager/actions/asyncAction";

const App = (props: any) => {
  return (
    <div className="app-wrapper">
      <p>It's Alllllllll Typescript !!!</p>
      <p>Current Number : {props.count}</p>
      <p>{props.name}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.asyncIncrement}>Async Increment</button>
      <button onClick={props.asyncDecrement}>Async Decrement</button>

      <button onClick={props.capitalizeAll}>Capitalize</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementBy: (by: number) => dispatch(incrementBy(by)),
    decrementBy: (by: number) => dispatch(decrementBy(by)),
    asyncIncrement: () => dispatch(asyncIncrement()),
    asyncDecrement: () => dispatch(asyncDecrement()),
    capitalizeAll: () => dispatch(capitalizeAll())
  };
};

const mapStateToProps = ({ counterReducer, userReducer }: any) => {
  return {
    count: counterReducer.count,
    name: userReducer.name
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
