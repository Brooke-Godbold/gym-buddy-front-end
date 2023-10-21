import styled from 'styled-components';
import { CommonScrollbar } from '../../../styles/GlobalStyles';

const StyledReviewDetails = styled.div`
  width: 25vw;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  padding: 2.4rem;

  @media (max-width: 120em) {
    width: 50vw;
  }

  @media (max-width: 80em) {
    width: 75vw;
  }

  @media (max-width: 30em) {
    padding: 0.5rem;
    padding-top: 3.2rem;
  }
`;

const ReviewDetailsHeading = styled.h3`
  font-size: 2.4rem;

  @media (max-width: 30em) {
    font-size: 1.8rem;
  }
`;

const ReviewDetailsContent = styled.p`
  ${CommonScrollbar}
  max-height: 40vh;

  overflow-y: scroll;

  @media (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

const ReviewUsefulnessContainer = styled.div`
  position: absolute;
  right: 6.4rem;
  top: 5.8rem;

  @media (max-width: 80em) {
    position: static;

    margin-top: 2.4rem;
    align-self: flex-end;
  }
`;

export {
  StyledReviewDetails,
  ReviewDetailsHeading,
  ReviewDetailsContent,
  ReviewUsefulnessContainer,
};
