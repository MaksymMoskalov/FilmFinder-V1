import React from 'react';
import { NavLink } from 'react-router-dom';
import { Acsent, Logo, StyledHeared, StyledNav } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/authorization/auth.selectors';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

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
    </StyledHeared>
  );
};

export default Header;
