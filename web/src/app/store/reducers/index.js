import { combineReducers } from "redux";
import counter from "app/store/reducers/counter.reducer";

const createReducer = asyncReducers =>
  combineReducers({
    counter,
    ...asyncReducers
  });

export default createReducer;
