import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    plat: null, //== ytb sdc
    type: null,
  },
  reducers: {
    setPlat: (state, action) => {
      state.plat = action.payload.plat;
    },
    addUser: (state, action) => {
      state.user = action.payload.user;
    },
    addType: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const { setPlat, addUser, addType } = appSlice.actions;

export const selectPlat = (state) => state.app.plat;
export const selectUser = (state) => state.app.user;
export const selectType = (state) => state.app.type;

export default appSlice.reducer;
