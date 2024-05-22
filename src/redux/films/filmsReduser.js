import {
  movieByKeyWordThunk,
  movieCastThunk,
  movieDetailsThunk,
  movieReviewsThunk,
  topDayMoviesThunk,
  topWeekMoviesThunk,
  topRatedMoviesThunk,
} from './filmsOperations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  dayTopMovies: [],
  weekTopMovies: [],
  topRatedMovies: [],
  searchedMovies: [],
  filmData: {
    data: null,
    cast: null,
    reviews: null,
  },
  isLoading: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'moviesDetails',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(topDayMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayTopMovies = action.payload.results;
      })

      .addCase(topWeekMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weekTopMovies = action.payload.results;
      })

      .addCase(topRatedMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topRatedMovies = action.payload.results;
      })

      .addCase(movieByKeyWordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedMovies = action.payload.results;
      })

      .addCase(movieDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.data = action.payload;
      })

      .addCase(movieCastThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.cast = action.payload.cast;
      })

      .addCase(movieReviewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.reviews = action.payload.results;
      })

      .addMatcher(
        isAnyOf(
          topDayMoviesThunk.pending,
          topWeekMoviesThunk.pending,
          topRatedMoviesThunk.pending,
          movieByKeyWordThunk.pending,
          movieDetailsThunk.pending,
          movieCastThunk.pending,
          movieReviewsThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          topDayMoviesThunk.rejected,
          topWeekMoviesThunk.rejected,
          topRatedMoviesThunk.rejected,
          movieByKeyWordThunk.rejected,
          movieDetailsThunk.rejected,
          movieCastThunk.rejected,
          movieReviewsThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const moviesReducer = moviesSlice.reducer;