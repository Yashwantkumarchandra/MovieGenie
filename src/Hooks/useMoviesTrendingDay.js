import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMoviesDay } from "../utils/MovieSlice";

const useMoviesTrendingDay = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMoviesDay);
  const dispatch = useDispatch();
  const getMoviesTrendingDay = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMoviesDay(json.results));
  };
  useEffect(() => {
    !trendingMovies && getMoviesTrendingDay();
  }, []);
};

export default useMoviesTrendingDay;
