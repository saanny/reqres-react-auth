import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "./hooks/useTypeSelector";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
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
        <></>
      )}
    </Switch>
  );
};
