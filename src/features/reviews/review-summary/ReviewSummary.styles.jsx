import styled from 'styled-components';
import { BaseItem } from '../../../styles/GlobalStyles';

const StyledReviewSummary = styled.button`
  border: none;
  ${BaseItem}

  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const ReviewSummaryHeading = styled.h3`
  font-size: 2.4rem;

  pointer-events: none;
`;

const ReviewSummaryContent = styled.p`
  font-size: 1.4rem;

  text-align: start;

  pointer-events: none;
`;

export { StyledReviewSummary, ReviewSummaryHeading, ReviewSummaryContent };
