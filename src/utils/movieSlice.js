import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlaying,addPopularMovies,addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
