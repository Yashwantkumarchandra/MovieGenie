import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-full pt-14 sm:pt-0">
      {/* <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&amp;start=4&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      {/* here for full screen I Have  hard Coded otherwise you can use anyone */}
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube-nocookie.com/embed/hXzcyx9V0xw?si=5VbLznR7R8fHISdM&amp;&amp;controls=0&amp;start=3&autoplay=1&mute=1&privacy=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
