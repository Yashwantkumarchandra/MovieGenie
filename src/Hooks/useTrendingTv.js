import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingTvSeries } from "../utils/MovieSlice";

const useTrendingTv = () => {
  const trendingTv = useSelector((store) => store.movies.trendingTvSeries);
  const dispatch = useDispatch();
  const getTrendingTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingTvSeries(json.results));
  };
  useEffect(() => {
    !trendingTv && getTrendingTv();
  }, []);
};

export default useTrendingTv;
