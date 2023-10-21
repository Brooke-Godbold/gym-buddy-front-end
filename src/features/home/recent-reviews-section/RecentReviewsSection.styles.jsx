import styled from 'styled-components';
import { CommonScrollbar } from '../../../styles/GlobalStyles';

const StyledRecentReviewsSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  padding: 4.8rem;

  @media (max-width: 40em) {
    padding: 4.8rem 1.2rem;
  }
`;

const RecentReviewsList = styled.div`
  ${CommonScrollbar}

  width: 100%;

  padding: 2.4rem;

  display: flex;
  gap: 1.2rem;

  overflow-x: hidden;
`;

export { StyledRecentReviewsSection, RecentReviewsList };
