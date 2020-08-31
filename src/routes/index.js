import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import Profile from "../pages/Profile";
import Dashboard from "../pages/DashBoard";

import history from "../services/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
