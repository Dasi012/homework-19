import { combineReducers, createStore } from "redux";
import authReducer from "./auth/authReducer";
import todoReducer from "./todo/todoReducer";
import { calculateReducer } from "./reducers/calculate";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  caculate: calculateReducer,
});

export const store = createStore(rootReducer);
