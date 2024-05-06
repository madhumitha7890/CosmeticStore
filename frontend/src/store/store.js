import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./slices/userLogin";

export const reduxStore = configureStore({
  reducer: { userLogin: userLoginReducer },
});