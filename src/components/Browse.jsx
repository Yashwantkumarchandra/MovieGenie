import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTrendingTv from "../Hooks/useTrendingTv";
import useMoviesTrendingDay from "../Hooks/useMoviesTrendingDay";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTrendingTv();
  useMoviesTrendingDay();
  return (
    <div className="">
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
