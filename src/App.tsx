import React, { Dispatch } from "react";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./actions/counterAction";
import { asyncDecrement, asyncIncrement } from "./actions/asyncCounterAction";
import { connect } from "react-redux";

const App = props => {
  return (
    <div>
      <p>It's Alllllllll Typescript !!!</p>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={() => props.incrementBy(2)}>Increment By</button>
      <button onClick={() => props.decrementBy(2)}>Decrement By</button>
      <button onClick={props.asyncIncrement}>Async Increment</button>
      <button onClick={props.asyncDecrement}>Async Decrement</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementBy: (by: number) => dispatch(incrementBy(by)),
    decrementBy: (by: number) => dispatch(decrementBy(by)),
    asyncIncrement: () => dispatch(asyncIncrement()),
    asyncDecrement: () => dispatch(asyncDecrement())
  };
};

const mapStateToProps = ({ counterReducer }: any) => {
  return {
    count: counterReducer.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
