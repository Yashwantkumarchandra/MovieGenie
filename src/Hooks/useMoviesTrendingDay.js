import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTrendingMoviesDay } from "../utils/MovieSlice";

const useMoviesTrendingDay = () => {
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
    getMoviesTrendingDay();
  }, []);
};

export default useMoviesTrendingDay;
