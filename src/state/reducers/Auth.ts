import { ActionType } from "../action-types";
import { Action } from "../actions";
interface AuthState {
  loading: boolean;
  error: string | null;
  authToken: string | null;
  user: object | null;
}
const initializeState = {
  loading: false,
  error: null,
  authToken: null,
  user: null,
};
const reducer = (
  state: AuthState = initializeState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { loading: true, error: null, authToken: null, user: null };
    case ActionType.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        authToken: action.payload.token,
        user: action.payload.user,
      };
    case ActionType.LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        authToken: null,
        user: null,
      };
    case ActionType.REGISTER:
      return { loading: true, error: null, authToken: null, user: null };
    case ActionType.REGISTER_SUCCESS:
      return {
        loading: false,
        error: null,
        authToken: action.payload.token,
        user: null,
      };
    case ActionType.REGISTER_ERROR:
      return {
        loading: false,
        error: action.payload,
        authToken: null,
        user: null,
      };

    default:
      return state;
  }
};
export default reducer;
