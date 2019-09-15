import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "app/routes";

function Layout() {
  return (
    <div className="container">
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.id} />
        ))}
      </Switch>
    </div>
  );
}

export default Layout;
