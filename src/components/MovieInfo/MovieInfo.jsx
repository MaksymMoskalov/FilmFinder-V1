import React, { Suspense, lazy } from 'react';
import { MdFavorite } from 'react-icons/md';
import { MdReviews } from 'react-icons/md';

import {
  ActionBtn,
  BackDrop,
  ButtonWrapper,
  InfoWrapper,
  MovieData,
  Overview,
  PosterWrapper,
  Shorts,
  Text,
  Title,
} from './MovieInfo.styled';
import { Route, Routes } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import { BASE_BACKDROP_URL, LARGE_POSTER_URL } from 'service/moviesAPI';
import { extractYear } from 'service/genreFetcher';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieInfo = ({ movie, backLinkHref, movieId }) => {
  return (
    movie && (
      <BackDrop
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%), url(${
            BASE_BACKDROP_URL + movie.backdrop_path
          })`,
        }}
      >
        <InfoWrapper>
          <PosterWrapper>
            <img
              src={LARGE_POSTER_URL + movie.poster_path}
              alt=""
              className="poster-image"
            />
          </PosterWrapper>
          <MovieData>
            <Title>{movie.title}</Title>
            <Shorts>
              <Text>{extractYear(movie.release_date)}</Text>
              <Text>{movie.runtime}хв</Text>
              {movie.adult ? <Text>18+</Text> : ''}
              <Text>{movie.origin_country[0]}</Text>
              <Text>
                {movie.genres.map(({ name }) => {
                  return <Text>{name}</Text>;
                })}
              </Text>
            </Shorts>
            <Overview>{movie.overview}</Overview>
            <ButtonWrapper>
              <ActionBtn type="button">
                До улюблених <MdFavorite className="button-icon" />
              </ActionBtn>
              <ActionBtn type="button">
                До переглянутих <MdReviews className="button-icon" />
              </ActionBtn>
            </ButtonWrapper>
          </MovieData>
        </InfoWrapper>

        {/* <Link to={backLinkHref.current} className="back-btn">
          Go back
        </Link>
        <div>
          <NavLink to={'cast'} className="details-link">
            Cast
          </NavLink>
          <NavLink to={'reviews'} className="details-link">
            Reviews
          </NavLink>
        </div> */}

        <Suspense
          fallback={
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
            />
          }
        >
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </Suspense>
      </BackDrop>
    )
  );
};

export default MovieInfo;
