import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/appSlice";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
