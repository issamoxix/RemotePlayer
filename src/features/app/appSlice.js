import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    type: null,
    Search: null,
    query: null,
  },
  reducers: {
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

export const { addType, setSearch, setQuery } = appSlice.actions;

export const selectQuery = (state) => state.app.query;

export const selectType = (state) => state.app.type;
export const selectSearch = (state) => state.app.Search;

export default appSlice.reducer;
