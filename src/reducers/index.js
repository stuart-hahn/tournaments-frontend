import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import tournamentsReducer from "./tournamentsReducer";

export default combineReducers({
  auth: loginReducer,
  tournaments: tournamentsReducer,
});
