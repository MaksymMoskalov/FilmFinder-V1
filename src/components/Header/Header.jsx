import React from 'react';
import { NavLink } from 'react-router-dom';
import { Acsent, Logo, StyledHeared, StyledNav } from './Header.styled';

const Header = () => {
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
      </StyledNav>
    </StyledHeared>
  );
};

export default Header;
