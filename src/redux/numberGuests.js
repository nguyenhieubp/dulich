import { createSlice } from "@reduxjs/toolkit";

const numberGuestsSlice = createSlice({
  name: "numberGuests",
  initialState: {
    adult: 2,
    children: 0,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  },
  reducers: {
    changeAdult(state, action) {
      state.adult = action.payload;
    },
    changeChildren(state, action) {
      state.children = action.payload;
    },
    changeDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { changeAdult, changeChildren, changeDate } =
  numberGuestsSlice.actions;
export default numberGuestsSlice.reducer;
