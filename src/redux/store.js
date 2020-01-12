import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./ducks";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const devtools =
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware), devtools)
);

export default store;
