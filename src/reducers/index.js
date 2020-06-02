import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import tournamentsReducer from "./tournamentsReducer";
import playersReducer from "./playersReducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  tournamentsData: tournamentsReducer,
  playersData: playersReducer,
});

export default rootReducer;
