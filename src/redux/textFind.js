import { createSlice } from "@reduxjs/toolkit";

const textFindSlice = createSlice({
  name: "textFind",
  initialState: { textFind: "" },
  reducers: {
    search(state, action) {
      state.textFind = action.payload;
    },
  },
});
export const { search } = textFindSlice.actions;
export default textFindSlice.reducer;
