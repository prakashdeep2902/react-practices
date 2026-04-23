import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addInCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((val) => val.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    productCount: (state, action) => {
      const { id, text } = action.payload;
      const existingItem = state.items.find((val) => val.id === id);
      if (text === "-") {
        existingItem.quantity == 0
          ? (existingItem.quantity = 0)
          : (existingItem.quantity -= 1);
      } else {
        existingItem.quantity += 1;
      }
    },
  },
});

export const { addInCart, removeFromCart, productCount } = cartSlice.actions;
export default cartSlice.reducer;
