import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import rootReducer from "./reducers/rootReducer";
import homeReducer from './reducers/home/home'


import { composeWithDevTools } from "redux-devtools-extension";
export const Store = createStore(
  // rootReducer,
  homeReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
