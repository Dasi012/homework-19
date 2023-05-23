import { combineReducers, createStore } from "redux";

import { calculateReducer } from "./reducers/calculate";

export const rootREdcer = combineReducers({
  caculate: calculateReducer,
});

export const store = createStore(rootREdcer);
