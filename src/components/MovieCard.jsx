import React from "react";
import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 sm:w-32 md:w-36 lg:w-44 xl:w-48  pr-4 hover:cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
