import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

// export const selectPlat = (state) => state.user.plat;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
