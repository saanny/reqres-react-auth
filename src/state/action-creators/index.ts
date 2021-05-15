import Http from "../../service/Http";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";
const api = new Http();

export const register = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER,
    });
    try {
      const { data, error } = await api.post("/register", {
        email,
        password,
      });

      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        payload: {
          token: data.token,
          user: { email },
        },
      });
    } catch (err) {
      dispatch({
        type: ActionType.REGISTER_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
    });
    try {
      const { data, error } = await api.post("/login", {
        email,
        password,
      });

      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: {
          token: data.token,
          user: { email },
        },
      });
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};
