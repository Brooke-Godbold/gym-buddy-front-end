import styled from 'styled-components';
import { CommonScrollbar } from '../../../styles/GlobalStyles';

const StyledReviewDetails = styled.div`
  width: 50vh;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const ReviewDetailsHeading = styled.h3`
  font-size: 2.4rem;
`;

const ReviewDetailsContent = styled.p`
  ${CommonScrollbar}
  max-height: 40vh;

  overflow-y: scroll;
`;

export { StyledReviewDetails, ReviewDetailsHeading, ReviewDetailsContent };
