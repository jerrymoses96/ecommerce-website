import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartReducer, 
});

const persistedReducer = persistReducer(persistConfig, reducer);

const AppStore = configureStore({
  reducer: persistedReducer
});
      
export default AppStore;
