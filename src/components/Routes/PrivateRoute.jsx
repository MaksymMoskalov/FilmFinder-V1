import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from '../../redux/authorization/auth.selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
