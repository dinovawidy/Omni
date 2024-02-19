import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
  name: "AddStore",
  initialState: {
    marketPlace: [],
  },
  reducers: {
    setMarketPlace: (state, action) => {
      state.marketPlace = action.payload;
    },
  },
});

export const {
  setMarketPlace,
} = reducerSlice.actions;

export default reducerSlice.reducer;