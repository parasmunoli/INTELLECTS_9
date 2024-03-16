import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./User/Login_auth";

export const store = configureStore({
  reducer: {
    user: dataSlice,
  },
});
