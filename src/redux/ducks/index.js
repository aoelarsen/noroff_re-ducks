import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import toggleInfo from "./toggle/reducers";
import fetchCards from "./cards/reducers";
import loadingReducer from "./loading/reducers";
import filterReducer from "./searchCards/reducers";

const rootReducer = combineReducers({
  authenticated: authReducer,
  toggleInfo: toggleInfo,
  cardsCollection: fetchCards,
  isLoading: loadingReducer,
  filterReducer: filterReducer
});

export default rootReducer;
