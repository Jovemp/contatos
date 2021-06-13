import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Lista from "../pages/lista";
import Profile from "../pages/profile";
import { history } from "../helpers/history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Lista} />
      <Route path="/detalhe" component={Profile} />
    </Switch>
  </Router>
);

export default Routes;
