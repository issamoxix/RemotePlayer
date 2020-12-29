import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";
import playerSlice from "../features/player/playerSlice";
import userSlice from "../features/user/userSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    user: userSlice,
    player: playerSlice,
  },
});
