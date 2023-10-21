import styled from 'styled-components';

const StyledRatingBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  pointer-events: ${(props) => (props.$canEdit ? 'all' : 'none')};
`;

const RatingBarIcons = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 30em) {
    gap: 0.25rem;
  }
`;

const RatingIconContainer = styled.button`
  border: none;
  background-color: transparent;

  pointer-events: ${(props) => (props.$canEdit ? 'all' : 'none')};

  &:active,
  &:focus {
    outline: none;
  }

  & svg {
    transform-origin: center center;
    transform: scale(150%) rotate(45deg);

    @media (max-width: 30em) {
      transform: scale(120%) rotate(45deg);
    }
  }
`;

const RatingBarText = styled.p`
  font-size: 1.4rem;

  text-align: start;
`;

export { StyledRatingBar, RatingIconContainer, RatingBarIcons, RatingBarText };
