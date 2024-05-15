import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  selectDayTopMovies,
  selectMoviesError,
} from '../redux/films/films.selectors';
import { topDayMoviesThunk } from '../redux/films/filmsOperations';

const Home = () => {
  const topDayMovie = useSelector(selectDayTopMovies);
  const movieError = useSelector(selectMoviesError);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topDayMoviesThunk());
  }, [dispatch]);

  return (
    <ul>
      {movieError && window.alert(movieError)}
      {topDayMovie.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link
              state={{ from: location }}
              to={`/movies/${id}`}
              className="movie-title"
            >
              <p>{original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
