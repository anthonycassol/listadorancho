import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/Login";

export default function Rotes() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}