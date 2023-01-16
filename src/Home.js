import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import VideoList from "./Components/VideoList/VideoList";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <Sidebar />
        <VideoList />
      </div>
    </div>
  );
}

export default Home;
