import React from "react";
import "./VideoContent.css";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LikeIcon from "@mui/icons-material/ThumbUpAlt";
import DisLikeIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
function VideoContent({ content }) {
  return (
    <div className="video__Content">
      <h4 className="videoContent__title">{content.snippet.title}</h4>

      <div className="videoContent__info">
        <div className="videoContent__profile">
          <Avatar />
          <h4 className="videoContent__channelName">
            {content.snippet.channelTitle}
          </h4>
        </div>

        <div className="button__groups">
          <div className="left__btn">
            <button className="join__btn">Join</button>
            <button className="subscribe__btn">
              <NotificationsIcon />
              Subcribe
            </button>
          </div>
          <div className="right__btn">
            <button className="like__btn">
              <LikeIcon />

              <DisLikeIcon />
            </button>
            <button className="share__btn">
              <ShareIcon />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="videoContent__footer">
        <p className="videoContent__timestamp">{content.snippet.publishTime}</p>
        <p className="videoContent__description">
          {content.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoContent;
