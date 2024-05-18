import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeared = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 42px;
  padding-right: 42px;

  background-color: #0d1117;
  border-bottom: 1px solid grey;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .header-link {
    padding: 20px;
    text-decoration: none;
    font-weight: 500;
    color: white;
    &:hover {
      color: #ad9236;
    }
    &.active {
      color: #ad9236;
    }
  }
`;

export const Logo = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;
export const Acsent = styled.span`
  color: yellow;
`;

export const StyledNav = styled.nav`
  margin-left: 42px;
`;
