import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/navbar/navbar";
import Login from "./pages/Login/Login";
import ChannelsMe from "./pages/channels-me/channels-me";
import Channels from "./pages/channels/channels";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/channels/@me">
          <ChannelsMe />
        </Route>
        <Route path="/channels/:id/:channelid">
          <Channels />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
