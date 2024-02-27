import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black  ">
      <div className="w-4/12">
        <h1 className=" text-5xl font-bold">{title}</h1>
        <p className="py-3">{overview}</p>
        <div>
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
            Play
          </button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
