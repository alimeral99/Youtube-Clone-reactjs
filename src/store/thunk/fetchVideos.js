import { createAsyncThunk } from "@reduxjs/toolkit";
import youtube from "../../api/api";

const fetchVideos = createAsyncThunk("videos/fetch", async (term) => {
  const response = await youtube.get("/search", {
    params: {
      q: term,
    },
  });
  return response.data.items;
});

export { fetchVideos };
