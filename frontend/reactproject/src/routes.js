import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Listas from "./pages/Listas";
import NovaLista from "./pages/NovaLista";
import Produtos from "./pages/Produtos";
import NovoProduto from "./pages/NovoProduto";

export default function Rotes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registrar" component={Registrar}></Route>
        <Route path="/listas" component={Listas}></Route>
        <Route path="/novalista" component={NovaLista}></Route>
        <Route path="/produtos" component={Produtos}></Route>
        <Route path="/novoproduto" component={NovoProduto}></Route>
      </Switch>
    </Router>
  );
}