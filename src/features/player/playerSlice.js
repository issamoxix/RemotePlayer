import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playing: false,
    id: null,
    name: null,
  },
  reducers: {},
});

// export const {} = playerSlice.actions;

// export const selectPlat = (state) => state.player.plat;

export default playerSlice.reducer;
