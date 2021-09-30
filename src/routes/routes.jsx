import { Route, Switch } from "react-router-dom";
import * as Page from "../pages";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { UseAuth } from "../contexts/auth/hook";
import { Spinner } from "../components/spinner";
import { Container } from "./styles";

export function Routes() {
  const location = useLocation();
  const history = useHistory();
  const { user, loading } = UseAuth();

  useEffect(() => {
    if (user) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [user, history]);

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Page.Login} />
        <Route exact path="/home" component={Page.Home} />
      </Switch>
      {loading && (
        <Container>
          <Spinner isActive />
        </Container>
      )}
    </>
  );
}
