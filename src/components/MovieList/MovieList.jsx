import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';

const MovieList = ({ topDayMovie }) => {
  return (
    <ul>
      {topDayMovie.map(movie => {
        return <MovieItem movie={movie} />;
      })}
    </ul>
  );
};

export default MovieList;
