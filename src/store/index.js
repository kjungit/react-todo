import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice";

const rootReducer = combineReducers({
  post: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
