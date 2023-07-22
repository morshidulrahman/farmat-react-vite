import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlices";
import authReducer from "../features/authSlice";
const store = configureStore({
  reducer: {
    basket: basketReducer,
    auth: authReducer,
  },
});

export default store;
