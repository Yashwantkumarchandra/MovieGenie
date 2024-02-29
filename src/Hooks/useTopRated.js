import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedVideo } from "../utils/MovieSlice";

const useTopRated = () => {
  const topRated = useSelector((store) => store.movies.topRated);
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedVideo(json.results));
  };
  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated;
