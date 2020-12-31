import { createSlice } from "@reduxjs/toolkit";

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
    setQuery: (state, action) => {
      state.query = action.payload.query;
    },
  },
});

export const { setPlat, addType, setSearch, setQuery } = appSlice.actions;

export const selectPlat = (state) => state.app.plat;
export const selectQuery = (state) => state.app.query;

export const selectType = (state) => state.app.type;
export const selectSearch = (state) => state.app.Search;

export default appSlice.reducer;
