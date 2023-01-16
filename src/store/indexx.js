import { configureStore } from "@reduxjs/toolkit";
import videosReducers from "./slice/videoSlice";

const store = configureStore({
  reducer: {
    videos: videosReducers,
  },
});

export default store;
