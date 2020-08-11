import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Listas from "./pages/Listas";
import NovaLista from "./pages/NovaLista";
import Produtos from "./pages/Produtos";

export default function Rotes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registrar" component={Registrar}></Route>
        <Route path="/listas" component={Listas}></Route>
        <Route path="/novo" component={NovaLista}></Route>
        <Route path="/produtos" component={Produtos}></Route>
      </Switch>
    </Router>
  );
}