import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlices = createSlice({
  name: "basket",
  initialState,
  reducers: {
    additems: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    removeitems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id !== action.payload) return item;
          if (item.quantity === 1) return false;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((x) => x !== false);
    },
  },
});

export const {
  additems,
  removeitems,
  increaseItemQuantity,
  decreaseItemQuantity,
} = basketSlices.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotalPrice = (state) =>
  state.basket.items
    .map((x) => x.price * x.quantity)
    .reduce((a, b) => a + b, 0);
export const selectTotalCartItems = (state) =>
  state.basket.items.map((x) => x.quantity).reduce((a, b) => a + b, 0);

export default basketSlices.reducer;
