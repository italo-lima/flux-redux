import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Profile from "../pages/Profile";
import Dashboard from "../pages/DashBoard";

import { history } from "../store";

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  );
};

export default Routes;
