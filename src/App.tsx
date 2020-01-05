import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
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
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = (props: any) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <nav id="the-nav">
          <Link to="/">ToHome</Link>
          <br/>
          <Link to="/profile">Profile</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
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
