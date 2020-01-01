import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div id="wrapper-app">
        <nav
          id="navbar-app"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "2%",
            width: "100%"
          }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
