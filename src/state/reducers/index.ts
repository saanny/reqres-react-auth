import { combineReducers } from "redux";
import authReducer from "./Auth";

const reducers = combineReducers({
  auth: authReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
