import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as Page from "pages";
import { useLocation } from "react-router-dom";

export function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Page.Login} />
        <Route exact path="/home" component={Page.Home} />
      </Switch>
    </AnimatePresence>
  );
}
