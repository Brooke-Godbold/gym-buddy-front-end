import styled from 'styled-components';

const StyledRatingBar = styled.div`
  display: flex;
  gap: 2.4rem;

  pointer-events: none;

  @media (max-width: 75em) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const RatingBarIcons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const RatingIconContainer = styled.div`
  & svg {
    transform-origin: center center;
    transform: scale(150%) rotate(45deg);
  }
`;

const RatingBarText = styled.p`
  font-size: 1.4rem;
`;

export { StyledRatingBar, RatingIconContainer, RatingBarIcons, RatingBarText };
