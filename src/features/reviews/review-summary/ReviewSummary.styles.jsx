import styled from 'styled-components';
import { BaseItem, CommonButton } from '../../../styles/GlobalStyles';

const StyledReviewSummary = styled.div`
  border: none;
  ${BaseItem}

  background-color: ${(props) =>
    props.$ownedReview ? 'var(--color-brand-100)' : 'var(--color-grey-100)'};
  border-top: ${(props) =>
    props.$ownedReview
      ? 'solid 4px var(--color-brand-300)'
      : 'solid 4px var(--color-brand-200)'};

  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  position: relative;
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

const ReviewUsefulnessContainer = styled.div`
  position: absolute;
  right: 2.4rem;
  top: 2.8rem;

  @media (max-width: 80em) {
    position: static;

    margin-top: 2.4rem;
    align-self: flex-end;
  }
`;

const ReviewSummaryButton = styled.button`
  ${CommonButton}

  height: 3.6rem;
`;

export {
  StyledReviewSummary,
  ReviewSummaryHeading,
  ReviewSummaryContent,
  ReviewUsefulnessContainer,
  ReviewSummaryButton,
};
