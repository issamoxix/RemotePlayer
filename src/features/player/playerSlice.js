import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    songId: null,
    songName: null,
    playing: false,
    artW: null,
    vol: 100,
    plat: null,
    Splat: "ytb",
    pl: false,
  },
  reducers: {
    addSong: (state, action) => {
      state.songId = action.payload.songId;
      state.songName = action.payload.songName;
      state.playing = action.payload.playing;
      state.artW = action.payload.artW;
      state.vol = action.payload.vol;
      state.plat = action.payload.plat;
    },
    setVol: (state, action) => {
      state.vol = action.payload.vol;
    },
    setPlat: (state, action) => {
      state.plat = action.payload.plat;
    },
    setPl: (state, action) => {
      state.pl = action.payload.pl;
    },
    setSpl: (state, action) => {
      state.Splat = action.payload.Sp;
    },
  },
});

export const { addSong, setVol, setPlat, setPl, setSpl } = playerSlice.actions;

// export const selectPlat = (state) => state.player.plat;

export const selectSongId = (state) => state.player.songId;
export const selectSongPlay = (state) => state.player.playing;
export const selectSongName = (state) => state.player.songName;
export const selectVol = (state) => state.player.vol;
export const selectArt = (state) => state.player.artW;
export const selectPlat = (state) => state.player.plat;
export const selectPl = (state) => state.player.pl;
export const selectSplat = (state) => state.player.Splat;

export default playerSlice.reducer;
