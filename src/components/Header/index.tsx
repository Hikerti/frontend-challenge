import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #2196f3;
  height: 64px;
  display: flex;
  padding: 0 62px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  opacity: 0.7;
  padding: 0 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: 0.2s;

  &.active {
    opacity: 1;
    background: #1e88e5;
  }
  &:hover { opacity: 1; }
`;

export const Header = () => (
    <StyledHeader>
        <StyledLink to="/">Все котики</StyledLink>
        <StyledLink to="/favorites">Любимые котики</StyledLink>
    </StyledHeader>
);