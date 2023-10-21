import styled from 'styled-components';
import { BasePage } from '../../styles/GlobalStyles';

const StyledSearch = styled.div`
  ${BasePage}

  @media (max-width: 160em) {
    width: 100%;
  }

  @media (max-width: 120em) {
    width: 100%;
  }

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-brand-100);
`;

const SearchHeading = styled.h1`
  font-size: 6.4rem;

  @media (max-width: 40em) {
    font-size: 4.8rem;
  }

  @media (max-width: 30em) {
    font-size: 3.2rem;
  }
`;

const SearchResultsContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  @media (max-width: 160em) {
    width: 75%;
  }

  @media (max-width: 120em) {
    width: 90%;
  }
`;

export { StyledSearch, SearchHeading, SearchResultsContainer };
