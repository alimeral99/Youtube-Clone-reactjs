import React from "react";
import "./VideoItem.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function VideoItem({ video }) {
  //Video Content,
  let { channelTitle, title } = video.snippet;

  const videoTitle = title.slice(0, 40) + "...";

  //Video Img
  const { url } = video.snippet.thumbnails.medium;

  return (
    <div className="videoItem">
      <Link to={`/videoDetails/${video.etag}`}>
        <img src={url} alt="profile_img" className="video__img" />
      </Link>
      <div className="video__content">
        <Avatar />
        <div className="video__info">
          <h2 className="video__title">{videoTitle}</h2>
          <div className="video__footer">
            <h2 className="channel__name">{channelTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
