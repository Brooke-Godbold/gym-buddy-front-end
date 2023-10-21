import styled, { css } from 'styled-components';
import { CommonButton } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div`
  width: 100%;

  padding: 2.4rem 4.8rem;

  display: flex;
  justify-content: space-between;

  background-color: var(--color-grey-200);
  box-shadow: var(--shadow-lg);

  position: relative;

  z-index: 990;

  @media (max-width: 45em) {
    padding: 2.4rem;
  }
`;

const MainNavButton = css`
  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  &:focus,
  &:active {
    outline: none;
  }

  & p {
    font-weight: 700;
    pointer-events: none;
  }

  & svg {
    transform: scale(250%);
  }
`;

const HomeButton = styled(NavLink)`
  ${MainNavButton}

  @media (max-width: 45em) {
    display: none;
  }
`;

const NavBarMobileMenuButton = styled.button`
  ${MainNavButton}

  display: none;

  @media (max-width: 45em) {
    display: block;
  }
`;

const SearchBarContainer = styled.form`
  width: 25%;
  height: 4.8rem;

  position: relative;

  & svg {
    position: absolute;
    right: 2.4rem;
    top: -50%;

    transform: scale(150%) translate(0, 150%);

    pointer-events: none;
  }

  @media (max-width: 120em) {
    width: 50%;
  }

  @media (max-width: 45em) {
    width: 75%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 100%;

  padding: 0 1.8rem;

  background-color: var(--color-grey-300);

  border: solid 2px var(--color-grey-400);
  border-radius: 25px;
`;

const LoginButton = styled.a`
  ${CommonButton}

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 5.2rem;
  min-height: 5.2rem;
`;

const NavBarButton = styled.button`
  ${CommonButton}

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 5.2rem;
  min-height: 5.2rem;
`;

const NavBarButtonsContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 45em) {
    display: none;
  }
`;

export {
  StyledNavBar,
  SearchBar,
  SearchBarContainer,
  LoginButton,
  HomeButton,
  NavBarButton,
  NavBarButtonsContainer,
  NavBarMobileMenuButton,
};
