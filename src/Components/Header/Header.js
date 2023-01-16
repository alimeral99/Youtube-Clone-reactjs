import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { fetchVideos } from "../../store/thunk/fetchVideos";
import { searchVideo } from "../../store/slice/videoSlice";
import { Avatar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSearchVideo = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(fetchVideos(input));
      dispatch(searchVideo(true));
    } else {
      alert("plaese enter term");
    }

    setInput("");
  };

  const backHomeHandle = () => {
    dispatch(searchVideo(false));
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/" onClick={backHomeHandle}>
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/100px-YouTube_Logo_2017.svg.png?20220605194644"
            alt="Youtube_Logo "
          />
        </Link>
      </div>

      <div className="header__center">
        <form onSubmit={handleSearchVideo} className="search__box">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <Button>
            <SearchIcon />
          </Button>
        </form>
        <MicIcon />
      </div>

      <div className="header__right">
        <VideoCallIcon />
        <NotificationsIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
