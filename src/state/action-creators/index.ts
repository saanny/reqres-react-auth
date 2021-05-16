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
export const getLists = (pageNumber: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIST,
    });
    try {
      const { data } = await api.get(`/users?page=${pageNumber}`);

      dispatch({
        type: ActionType.LIST_SUCCESS,
        payload: {
          entities: data.data,
          page: data.page,
          perPage: data.per_page,
          total: data.total,
          totalPages: data.total_pages,
        },
      });
    } catch (err) {
      dispatch({
        type: ActionType.LIST_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};

export const getUser = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_USER,
    });
    try {
      const { data } = await api.get(`/users/${id}`);

      dispatch({
        type: ActionType.GET_USER_SUCCESS,
        payload: {
          userForEdit: data.data,
        },
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_USER_ERROR,
        payload: err.response.data.error,
      });
    }
  };
};
export const logOut = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOG_OUT,
    });
  };
};
