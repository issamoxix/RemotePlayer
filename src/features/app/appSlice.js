import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    type: null,
    Search: null,
    query: null,
    loading: false,
    playlisth: false,
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
    toggleCard: (state) => {
      state.playlisth = !state.playlisth;
    },
  },
});

export const {
  toggleCard,
  addType,
  setSearch,
  setQuery,
  setLoading,
} = appSlice.actions;

export const selectQuery = (state) => state.app.query;

export const selectType = (state) => state.app.type;
export const selectSearch = (state) => state.app.Search;
export const selectLoading = (state) => state.app.loading;
export const selectPlst = (state) => state.app.playlisth;

export default appSlice.reducer;
