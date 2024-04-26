import { combineReducers, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import cookieReducer from "./cookie/cookieReducer";
import userReducer from "./user/userReducer";
// import logger from "redux-logger";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cookie: cookieReducer,
  user: userReducer,
});

const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from 'redux';

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
