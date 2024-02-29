import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideo } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularVideo);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularVideo(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
