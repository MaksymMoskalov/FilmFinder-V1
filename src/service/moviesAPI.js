import axios from 'axios';

const API_KEY = '18e5e9750ded436f0496ba91fa6dbaff';

export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w154';

export const getDayTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=uk-UK&api_key=${API_KEY}`
  );
  return data;
};

export const getWeekTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?language=uk-UK&api_key=${API_KEY}`
  );
  return data;
};

export const getUpcoming = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?language=uk-UK&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=uk-UK&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=uk-UK&api_key=${API_KEY}`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

export const getMovieByKeyWord = async keyWord => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=uk-UK&page=1&api_key=${API_KEY}`
  );
  return data.results;
};
