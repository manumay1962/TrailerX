import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};
export const tvSlice = createSlice({
  name: "tv",
  initialState,

  reducers: {
    loadtv: (state, actions) => {
      state.info = actions.payload;
    },

    removetv: (state, actions) => {
      state.info = null;
    },
  },
});

export const { removetv, loadtv } = tvSlice.actions;

export default tvSlice.reducer;
