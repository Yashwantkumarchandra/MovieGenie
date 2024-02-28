import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstans";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black  ">
      <div className="w-4/12">
        <h1 className=" text-5xl font-bold">{lang[langKey].movieTitle}</h1>
        <p className="py-3">{lang[langKey].movieOverview}</p>
        <div className="main-button font-semibold">
          <button className="bg-white text-black px-8 py-2 m-1 rounded bg-opacity-80 hover:bg-opacity-90">
            <span className="bi bi-play-fill"></span> {lang[langKey].play}
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-white px-8 py-2 m-1 rounded hover:bg-opacity-60">
            {lang[langKey].moreInfo}
            <span className="bi bi-info-circle"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
