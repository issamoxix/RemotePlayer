import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    type: null,
    Search: null,
    query: null,
    loading: false,
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
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { addType, setSearch, setQuery, setLoading } = appSlice.actions;

export const selectQuery = (state) => state.app.query;

export const selectType = (state) => state.app.type;
export const selectSearch = (state) => state.app.Search;
export const selectLoading = (state) => state.app.loading;
export default appSlice.reducer;
