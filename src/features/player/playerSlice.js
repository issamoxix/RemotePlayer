import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    songId: null,
    songName: null,
    playing: false,
    artW: null,
    vol: 100,
  },
  reducers: {
    addSong: (state, action) => {
      state.songId = action.payload.songId;
      state.songName = action.payload.songName;
      state.playing = action.payload.playing;
      state.artW = action.payload.artW;
      state.vol = action.payload.vol;
    },
    setVol: (state, action) => {
      state.vol = action.payload.vol;
    },
  },
});

export const { addSong, setVol } = playerSlice.actions;

// export const selectPlat = (state) => state.player.plat;

export const selectSongId = (state) => state.player.songId;
export const selectSongPlay = (state) => state.player.playing;
export const selectSongName = (state) => state.player.songName;
export const selectVol = (state) => state.player.vol;
export const selectArt = (state) => state.player.artW;
export default playerSlice.reducer;
