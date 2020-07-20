import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profile from "../pages/Profile";
import Dashboard from "../pages/DashBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
