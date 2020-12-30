import { createSlice } from "@reduxjs/toolkit";
import Search from "../../functions/SoundcloudSearch";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    plat: "sdc", //== ytb sdc
    type: null,
    Search: null,
    query: null,
  },
  reducers: {
    setPlat: (state, action) => {
      state.plat = action.payload.plat;
    },

    addType: (state, action) => {
      state.type = action.payload.type;
    },
    setSearch: (state, action) => {
      state.Search = action.payload.Search;
    },
  },
});

export const { setPlat, addType, setSearch } = appSlice.actions;

export const selectPlat = (state) => state.app.plat;

export const selectType = (state) => state.app.type;
export const selectSearch = (state) => state.app.Search;

export default appSlice.reducer;
