import React from "react";
import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import createReducer from "app/store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(createReducer(), applyMiddleware(thunk, logger));

store.asyncReducers = {};

const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export const withReducer = (key, reducer) => WrappedComponent => {
  injectReducer(key, reducer);
  return WrappedComponent;
};

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
