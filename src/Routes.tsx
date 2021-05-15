import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "./hooks/useTypeSelector";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Single } from "./pages/Single";
export const Routes = () => {
  const { authToken, user } = useSelector((state) => state.auth);

  return (
    <Switch>
      {!user ? (
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Redirect to="/auth/login" />
        </Switch>
      ) : (
        <>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user/:id" component={Single} />
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
};
