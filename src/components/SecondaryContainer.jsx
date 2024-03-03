import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstans";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-72mt-0 sm:mt-0 xl:-mt-56 lg:-mt-24 md:-mt-10 md:pl-2 lg:pl-10 relative z-20">
          <MovieList
            title={lang[langKey].nowPlaying}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={lang[langKey].topRated} movies={movies.topRated} />
          <MovieList
            title={lang[langKey].upcoming}
            movies={movies.upcomingMovies}
          />
          <MovieList
            title={lang[langKey].trending}
            movies={movies.trendingMoviesDay}
          />
          <MovieList
            title={lang[langKey].topRatedTv}
            movies={movies.trendingTvSeries}
          />
          <MovieList
            title={lang[langKey].popular}
            movies={movies.popularVideo}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
