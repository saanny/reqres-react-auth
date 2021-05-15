import { combineReducers } from "redux";
import authReducer from "./Auth";
import userListReducer from "./UserList";

const reducers = combineReducers({
  auth: authReducer,
  list: userListReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
