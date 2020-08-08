import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Registrar from "./pages/Registrar";

export default function Rotes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registrar" component={Registrar}></Route>
      </Switch>
    </Router>
  );
}