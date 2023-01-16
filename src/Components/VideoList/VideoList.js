import React, { useEffect } from "react";
import "./VideoList.css";
import { fetchVideos } from "../../store/thunk/fetchVideos";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "./VideoItem/VideoItem";

function VideoList() {
  const dispatch = useDispatch();

  const { searchingVideo } = useSelector((state) => {
    return state.videos;
  });

  const { isLoading, data, error } = useSelector((state) => {
    return state.videos;
  });

  useEffect(() => {
    dispatch(fetchVideos("reactjs"));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error fecthing data</div>;
  }

  return (
    <div className={`videoList ${searchingVideo && "searchvideoList"}`}>
      {data.map((video, id) => (
        <VideoItem video={video} key={id} />
      ))}
    </div>
  );
}

export default VideoList;
