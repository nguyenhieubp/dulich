import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: false },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
