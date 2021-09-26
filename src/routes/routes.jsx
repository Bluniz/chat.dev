import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as Page from "pages";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { UseAuth } from "contexts/auth/hook";

export function Routes() {
  const location = useLocation();
  const history = useHistory();
  const { user } = UseAuth();

  useEffect(() => {
    if (user) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [user, history]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Page.Login} />
        <Route exact path="/home" component={Page.Home} />
      </Switch>
    </AnimatePresence>
  );
}
