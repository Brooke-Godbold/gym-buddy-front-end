import styled from 'styled-components';
import { BaseItem, CommonButton } from '../../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const StyledRecentReview = styled.div`
  border: none;
  ${BaseItem}

  min-width: 50rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  position: relative;

  animation-duration: 15s;
  animation-name: slide;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

const RecentReviewHeading = styled.h3`
  font-size: 1.8rem;

  pointer-events: none;
`;

const RecentReviewContent = styled.p`
  font-size: 1.2rem;

  text-align: start;

  pointer-events: none;
`;

const RecentReviewLink = styled(NavLink)`
  ${CommonButton}

  padding: 0.8rem 1.2rem;

  height: 3.6rem;
`;

export {
  StyledRecentReview,
  RecentReviewHeading,
  RecentReviewContent,
  RecentReviewLink,
};
