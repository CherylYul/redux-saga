import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import cookieReducer from "./cookie/cookieReducer";
import userReducer from "./user/userReducer";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  cake: cakeReducer,
  cookie: cookieReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
});

export default store;
