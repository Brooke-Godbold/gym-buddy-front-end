import styled from 'styled-components';

const StyledPageErrorContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 40em) {
    gap: 2.4rem;
  }
`;

const PageErrorHeading = styled.h1`
  font-size: 12.4rem;

  @media (max-width: 80em) {
    font-size: 5.4rem;
  }

  @media (max-width: 40em) {
    font-size: 3.6rem;
  }

  @media (max-width: 30em) {
    font-size: 1.8rem;
  }
`;

const PageErrorText = styled.p`
  font-size: 2.4rem;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 1.8rem;
  }

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export { StyledPageErrorContainer, PageErrorHeading, PageErrorText };
