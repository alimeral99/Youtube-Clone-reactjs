import React from "react";
import Home from "./Home";
import VideoDetails from "./Components/VideoDetails/VideoDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videoDetails/:videoid" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
