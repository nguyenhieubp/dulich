import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addBill(state, action) {
      state.cart.push(action.payload);
    },
  },
});
export const { addBill } = cartSlice.actions;
export default cartSlice.reducer;
