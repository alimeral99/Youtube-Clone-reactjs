import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../thunk/fetchVideos";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
    searchingVideo: false,
  },
  reducers: {
    searchVideo(state, action) {
      state.searchingVideo = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

const videosReducers = videoSlice.reducer;
export const { searchVideo } = videoSlice.actions;
export default videosReducers;
