import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { extractYear, genreFetcher } from 'service/genreFetcher';
import { BASE_POSTER_URL } from 'service/moviesAPI';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  const { id, poster_path, title, release_date, genre_ids } = movie;
  const genres = genreFetcher(genre_ids);

  return (
    <Link
      state={{ from: location }}
      to={`/movies/${id}`}
      className="movie-title"
    >
      <li key={id}>
        <img src={BASE_POSTER_URL + poster_path} alt="" />
        <p>{title}</p>
        <p>
          <span>{extractYear(release_date)}</span>,{' '}
          {genres.map((genre, index) => {
            return (
              <span>
                {genre}
                {index < genres.length - 1 ? ',' : ''}{' '}
              </span>
            );
          })}
        </p>
      </li>
    </Link>
  );
};

export default MovieItem;
