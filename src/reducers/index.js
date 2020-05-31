import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  users: usersReducer,
  loginReducer,
});
