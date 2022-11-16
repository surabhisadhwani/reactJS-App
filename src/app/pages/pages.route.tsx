import { Dashboard } from "@material-ui/icons";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DashboardComponent from "./dashboard/dashboard";

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={() => (
      <Route {...rest} render={(props: any) => <Component {...props} />} />
    )}
  />
);

const PagesRoute = (props: any) => {
  return (
    <Switch>
      <PrivateRoute
        exact
        path={"/page/dashboard"}
        component={DashboardComponent}
      />
    </Switch>
  );
};

export default PagesRoute;
