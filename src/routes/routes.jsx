import { Route, Switch } from "react-router-dom";
import * as Page from "pages";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Page.Login} />
      <Route exact path="/home" component={Page.Home} />
    </Switch>
  );
}
