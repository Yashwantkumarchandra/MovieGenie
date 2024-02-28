import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTrendingTv from "../Hooks/useTrendingTv";
import useMoviesTrendingDay from "../Hooks/useMoviesTrendingDay";
import { useSelector } from "react-redux";
import GptHome from "./GptHome";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.GptSearch.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTrendingTv();
  useMoviesTrendingDay();
  return (
    <div className="">
      {showGptSearch ? (
        <GptHome />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
