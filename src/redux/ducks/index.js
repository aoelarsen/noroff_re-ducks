import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import toggleReducer from "./toggle/reducers";
import cardsReducer from "./cards/reducers";

const rootReducer = combineReducers({
  authReducer: authReducer,
  toggleReducer: toggleReducer,
  cardsReducer: cardsReducer
});

export default rootReducer;
