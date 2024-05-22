import React from 'react';
import { NavLink } from 'react-router-dom';
import { Acsent, Logo, StyledHeared, StyledNav } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthAuthenticated,
  selectAuthUtherData,
} from '../../redux/authorization/auth.selectors';
import { logOutThunk } from '../../redux/authorization/authOperations';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthUtherData);
  const disputch = useDispatch();

  const logOut = () => {
    disputch(logOutThunk());
  };

  return (
    <StyledHeared>
      <Logo to={'/'}>
        <Acsent>Film</Acsent>Finder
      </Logo>
      <StyledNav>
        <NavLink to={'/'} className="header-link">
          Home
        </NavLink>
        <NavLink to={'/movies'} className="header-link">
          Movies
        </NavLink>

        {!authenticated && (
          <>
            <NavLink to={'/login'} className="header-link">
              LogIn
            </NavLink>
            <NavLink to={'/register'} className="header-link">
              Register
            </NavLink>
          </>
        )}
      </StyledNav>
      {authenticated && (
        <div>
          <p>Hello {user.userName}</p>
          <button type="button" onClick={logOut}>
            Вихід
          </button>
        </div>
      )}
    </StyledHeared>
  );
};

export default Header;
