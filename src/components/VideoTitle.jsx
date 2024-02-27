import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative z-10 text-white pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 w-1/4">{overview}</p>
      <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
        Play
      </button>
      <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
