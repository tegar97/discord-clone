import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
