import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import tournamentsReducer from "./tournamentsReducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  tournaments: tournamentsReducer,
});

export default rootReducer;
