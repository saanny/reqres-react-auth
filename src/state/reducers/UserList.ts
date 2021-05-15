import { ActionType } from "../action-types";
import { Action, IUser } from "../actions";

interface EntitiesState {
  loading: boolean;
  error: string | null;
  entities?: [] | null;
  page?: number;
  perPage?: number;
  totalPages?: number;
  total?: number;
  userForEdit?: IUser | null;
}
const initializeState = {
  loading: false,
  error: null,
  entities: null,
  page: 1,
  totalPages: 0,
  total: 0,
  perPage: 0,
  userForEdit: null,
};
const reducer = (
  state: EntitiesState = initializeState,
  action: Action
): EntitiesState => {
  switch (action.type) {
    case ActionType.LIST:
      return {
        loading: true,
        error: null,
        entities: null,
        page: 1,
        totalPages: 0,
        total: 0,
        perPage: 0,
        userForEdit: null,
      };
    case ActionType.LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        entities: action.payload.entities,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        total: action.payload.total,
        perPage: action.payload.perPage,
        userForEdit: null,
      };
    case ActionType.LIST_ERROR:
      return {
        loading: false,
        error: action.payload,
        entities: null,
        page: 1,
        totalPages: 0,
        total: 0,
        perPage: 0,
        userForEdit: null,
      };
    case ActionType.GET_USER:
      return {
        loading: true,
        error: null,
        userForEdit: null,
      };
    case ActionType.GET_USER_SUCCESS:
      return {
        loading: false,
        error: null,

        userForEdit: action.payload.userForEdit,
      };
    case ActionType.GET_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        userForEdit: null,
      };

    default:
      return state;
  }
};
export default reducer;
