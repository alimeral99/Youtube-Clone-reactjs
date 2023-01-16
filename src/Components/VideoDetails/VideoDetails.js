import React from "react";
import "./VideoDetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContent from "./VideoContent/VideoContent";
import VideoItem from "../VideoList/./VideoItem/VideoItem";

function VideoDetails() {
  const videoId = useParams();

  const { data } = useSelector((state) => {
    return state.videos;
  });

  const selectedVideo = data.find(({ etag }) => etag === videoId.videoid);

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div className="video__Details">
      <div className="videoDetails__Container">
        <iframe title="video player" src={videoSrc} />
        <div className="videoDetails__content">
          <VideoContent content={selectedVideo} />
        </div>
      </div>
      <div className=".recommend__videos">
        {data.map((video, id) => (
          <VideoItem video={video} key={id} />
        ))}
      </div>
    </div>
  );
}

export default VideoDetails;
