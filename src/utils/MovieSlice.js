import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularVideo: null,
    topRated: null,
    upcomingMovies: null,
    trendingTvSeries: null,
    trendingMoviesDay: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTopRatedVideo: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingTvSeries: (state, action) => {
      state.trendingTvSeries = action.payload;
    },
    addTrendingMoviesDay: (state, action) => {
      state.trendingMoviesDay = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularVideo,
  addTopRatedVideo,
  addUpcomingMovies,
  addTrendingTvSeries,
  addTrendingMoviesDay,
} = MovieSlice.actions;
export default MovieSlice.reducer;
