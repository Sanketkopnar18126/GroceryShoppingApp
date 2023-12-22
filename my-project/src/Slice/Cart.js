import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "storeCart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCart } = Cart.actions;
export default Cart.reducer;
