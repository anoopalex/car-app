import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import CarSearch from "./pages/CarSearch";
import { createBrowserHistory } from "history";
import NotFound from "./pages/NotFound";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/car-search" component={CarSearch} />
        <Route path="/car-details/:id" component={CarDetails} />
        <Redirect exact from="/" to="/car-search" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
