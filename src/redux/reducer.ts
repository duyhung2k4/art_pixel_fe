import authSlice from "./slice/authSlice";

import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";



export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authSlice: authSlice.reducer,
})