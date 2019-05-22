import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "./Pages";

class RenderRoutes extends PureComponent {
  render() {
    return (
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Switch>
          {Pages.map(item => (
            <Route
              key={item.key}
              exact={item.exact}
              path={item.rota}
              component={item.component}
            />
          ))}
        </Switch>
      </React.Suspense>
    );
  }
}

export default RenderRoutes;
