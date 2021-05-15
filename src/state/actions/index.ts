import { ActionType } from "../action-types";

interface LoginAction {
  type: ActionType.LOGIN;
}
interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: object;
    token: string;
  };
}
interface LoginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}
interface RegisterAction {
  type: ActionType.REGISTER;
}
interface RegisterSuccessAction {
  type: ActionType.REGISTER_SUCCESS;
  payload: {
    token: string;
    user: object;
  };
}
interface RegisterErrorAction {
  type: ActionType.REGISTER_ERROR;
  payload: string;
}
export type Action =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction;
