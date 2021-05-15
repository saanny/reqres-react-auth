import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "./hooks/useTypeSelector";

export const Routes = () => {
  const { authToken, user } = useSelector((state) => state.auth);

  return <></>;
};
