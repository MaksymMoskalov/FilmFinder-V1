import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import Header from './Header/Header';
import LoginPage from 'pages/LogIn/LogIn';
import RegisterPage from 'pages/Register/Register';
import RestrictedRoute from './Routes/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/authorization/authOperations';
const Home = lazy(() => import('pages/Home'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const Search = lazy(() => import('pages/Search'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
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
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route path="/movies" element={<Search />} />
          <Route path="/movies/:movieId/*" element={<MovieInfo />} />
        </Routes>
      </Suspense>
    </>
  );
};
