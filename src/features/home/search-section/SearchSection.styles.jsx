import styled from 'styled-components';
import { CommonButton } from '../../../styles/GlobalStyles';

const StyledSearchSection = styled.form`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;

  padding: 8.4rem 4.8rem 4.8rem 4.8rem;

  @media (max-width: 160em) {
    width: 75%;
  }

  @media (max-width: 120em) {
    width: 90%;
  }

  @media (max-width: 30em) {
    padding: 8.4rem 1.2rem 4.8rem 1.2rem;
  }
`;

const SearchBarSubContainer = styled.div`
  width: 100%;
  height: 10rem;

  position: relative;

  @media (max-width: 45em) {
    height: 6.4rem;
  }
`;

const MainSearchBar = styled.input`
  width: 100%;
  height: 100%;

  padding: 0 1.8rem;

  background-color: var(--color-grey-300);

  border: solid 2px var(--color-grey-400);
  border-radius: 25px;

  font-size: 3.6rem;
`;

const SearchButton = styled.button`
  ${CommonButton}

  width: 15%;

  border-radius: 25px;

  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  bottom: 0.8rem;

  @media (max-width: 40em) {
    display: none;
  }
`;

export {
  StyledSearchSection,
  MainSearchBar,
  SearchButton,
  SearchBarSubContainer,
};
