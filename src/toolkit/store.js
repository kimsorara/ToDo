import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//getDefaultMiddleware직렬화를 위해
import todoList from "./reducer.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({ todos: todoList });
const persistConfig = {
  key: "persist",
  storage,
};
const enhancedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: enhancedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
