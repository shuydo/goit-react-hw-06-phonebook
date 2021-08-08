import { configureStore } from "@reduxjs/toolkit"; // import { devToolsEnhancer } from "redux-devtools-extension"
import items from "./slices/items";
import filter from "./slices/filter";

const rootReducer = { items, filter } ;

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
