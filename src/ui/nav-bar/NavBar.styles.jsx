import styled from 'styled-components';
import { CommonButton } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div`
  width: 100%;

  padding: 1.2rem 4.8rem;

  display: flex;
  justify-content: space-between;

  background-color: var(--color-grey-200);
  box-shadow: var(--shadow-lg);

  z-index: 990;
`;

const HomeButton = styled(NavLink)`
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
`;

const SearchBar = styled.input`
  width: 100%;
  height: 100%;

  padding: 0 1.8rem;

  background-color: var(--color-grey-300);

  border: solid 2px var(--color-grey-400);
  border-radius: 25px;
`;

const LoginButton = styled.button`
  ${CommonButton}
`;

export { StyledNavBar, SearchBar, SearchBarContainer, LoginButton, HomeButton };
