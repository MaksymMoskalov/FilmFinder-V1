import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import {
  selectDayTopMovies,
  selectMoviesError,
} from '../redux/films/films.selectors';
import { topDayMoviesThunk } from '../redux/films/filmsOperations';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const topDayMovie = useSelector(selectDayTopMovies);
  const movieError = useSelector(selectMoviesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topDayMoviesThunk());
  }, [dispatch]);

  return (
    <>
      {movieError && Notiflix.Notify.failure(movieError)}
      <MovieList topDayMovie={topDayMovie} />
    </>
  );
};

export default Home;
