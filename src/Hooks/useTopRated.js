import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedVideo } from "../utils/MovieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedVideo(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
