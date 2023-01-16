import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LiveTvIcon from "@mui/icons-material/LiveTvOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subcriptions" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Libary" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Yours videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
      <hr />
      <h3 className="sidebar__Title">Discover</h3>
      <SidebarRow title="Music" Icon={MusicNoteIcon} />
      <SidebarRow title="Live" Icon={LiveTvIcon} />
      <SidebarRow title="Game" Icon={SportsEsportsIcon} />
      <SidebarRow title="Music" Icon={MusicNoteIcon} />
      <SidebarRow title="Spor" Icon={EmojiEventsIcon} />
      <hr />
      <SidebarRow title="Settings" Icon={SettingsIcon} />
      <SidebarRow title="Help" Icon={HelpIcon} />
    </div>
  );
}

export default Sidebar;
