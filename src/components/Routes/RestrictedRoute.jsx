import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from '../../redux/authorization/auth.selectors';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
