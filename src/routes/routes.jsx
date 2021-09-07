import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Page from "pages";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page.Login} />
      </Switch>
    </BrowserRouter>
  );
}
