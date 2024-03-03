import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstans";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full aspect-video sm:pt-[16%] px-7 md:px-10 lg:px-16 xl:px-24 pt-40 absolute text-white bg-gradient-to-r from-black ">
      <div className="w-full">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl font-extrabold ">
          {lang[langKey].movieTitle}
        </h1>
        <p className="hidden sm:text-sm sm:inline-block mt-4 mb-4 font-normal w-8/12 lg:w-7/12 xl:w-3/12 sm:w-6/12 text-sm md:text-sm lg:text-base text-balance">
          {lang[langKey].movieOverview}
        </p>
        <div className="main-button font-semibold mt-4 sm:mt-0">
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
