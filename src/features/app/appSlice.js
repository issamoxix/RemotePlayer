import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    plat: null, //== ytb sdc
    type: null,
  },
  reducers: {
    setPlat: (state, action) => {
      state.plat = action.payload.plat;
    },

    addType: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const { setPlat, addType } = appSlice.actions;

export const selectPlat = (state) => state.app.plat;

export const selectType = (state) => state.app.type;

export default appSlice.reducer;
