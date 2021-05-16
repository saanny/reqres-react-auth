import { ActionType } from "../action-types";
export interface IUser {
  id?: number;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  avatar?: string | undefined;
}
interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    user: IUser | null;
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
    user: IUser | null;
  };
}
interface RegisterErrorAction {
  type: ActionType.REGISTER_ERROR;
  payload: string;
}

interface ListAction {
  type: ActionType.LIST;
}

interface ListSuccessAction {
  type: ActionType.LIST_SUCCESS;
  payload: {
    entities: [] | null;
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}
interface ListErrorAction {
  type: ActionType.LIST_ERROR;
  payload: string;
}

interface GetUserAction {
  type: ActionType.GET_USER;
}

interface GetUserSuccessAction {
  type: ActionType.GET_USER_SUCCESS;
  payload: {
    userForEdit: IUser | null;
  };
}
interface GetUserErrorAction {
  type: ActionType.GET_USER_ERROR;
  payload: string;
}
interface LogOutAction {
  type: ActionType.LOG_OUT;
}
export type Action =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterErrorAction
  | ListAction
  | ListSuccessAction
  | ListErrorAction
  | GetUserAction
  | GetUserSuccessAction
  | GetUserErrorAction
  | LogOutAction;
