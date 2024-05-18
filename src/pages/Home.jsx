import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import {
  selectDayTopMovies,
  selectMoviesError,
  selectTopRatedMovies,
  selectWeekTopMovies,
} from '../redux/films/films.selectors';
import {
  topDayMoviesThunk,
  topWeekMoviesThunk,
  topRatedMoviesThunk,
} from '../redux/films/filmsOperations';
import { StyledContainer } from 'Styles/Container.styled';
import Category from 'components/Category/Category';

const Home = () => {
  const topDayMovie = useSelector(selectDayTopMovies);
  const topWeekMovie = useSelector(selectWeekTopMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const movieError = useSelector(selectMoviesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topDayMoviesThunk());
    dispatch(topWeekMoviesThunk());
    dispatch(topRatedMoviesThunk());
  }, [dispatch]);

  return (
    <section>
      <StyledContainer>
        {movieError && Notiflix.Notify.failure(movieError)}
        <Category moviesFromCategory={topDayMovie} categoryTitle={'Топ Дня'} />
        <Category
          moviesFromCategory={topWeekMovie}
          categoryTitle={'Топ Тижня'}
        />
        <Category
          moviesFromCategory={topRatedMovies}
          categoryTitle={'Найпопулярніші'}
        />
      </StyledContainer>
    </section>
  );
};

export default Home;
