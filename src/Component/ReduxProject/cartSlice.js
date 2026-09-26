import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    wishlistItems: []
  },

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    }
  }
});

export const { addToCart, addToWishlist } = cartSlice.actions;

export default cartSlice.reducer;