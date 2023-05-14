import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlices";
const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
