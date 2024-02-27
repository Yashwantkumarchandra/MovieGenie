import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-72 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Trending Movies By Day"}
            movies={movies.trendingMoviesDay}
          />
          <MovieList
            title={"Trending TV Series"}
            movies={movies.trendingTvSeries}
          />
          <MovieList title={"Popular"} movies={movies.popularVideo} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
