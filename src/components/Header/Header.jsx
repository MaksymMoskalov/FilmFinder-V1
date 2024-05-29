import React from 'react';
import { NavLink } from 'react-router-dom';
import { Acsent, Logo, StyledHeared, StyledNav } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthAuthenticated,
  selectAuthUtherData,
} from '../../redux/authorization/auth.selectors';
import { logOutThunk } from '../../redux/authorization/authOperations';
import SearchBar from 'components/SearchBar/SearchBar';
import { handlResetSearch } from '../../redux/films/filmsReduser';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthUtherData);
  const disputch = useDispatch();

  const logOut = () => {
    disputch(logOutThunk());
  };

  const reset = () => {
    disputch(handlResetSearch());
  };

  return (
    <StyledHeared>
      <Logo to={'/'}>
        <Acsent>Film</Acsent>Finder
      </Logo>
      <StyledNav>
        <NavLink to={'/'} className="header-link" onClick={reset}>
          Home
        </NavLink>
      </StyledNav>
      <SearchBar />
      {authenticated && (
        <div>
          <p>Hello {user.userName}</p>
          <button type="button" onClick={logOut}>
            Вихід
          </button>
        </div>
      )}
      {!authenticated && (
        <NavLink to={'/login'} className="login">
          LogIn
        </NavLink>
      )}
    </StyledHeared>
  );
};

export default Header;
