import { PiBarbellFill, PiBarbellLight } from 'react-icons/pi';

import {
  RatingBarIcons,
  RatingBarText,
  RatingIconContainer,
  StyledRatingBar,
} from './RatingBar.styles';

function RatingBar() {
  const rating = 6;

  return (
    <StyledRatingBar>
      <RatingBarIcons>
        {[...Array(10)].map((e, i) => (
          <RatingIconContainer key={i}>
            {i < rating ? <PiBarbellFill /> : <PiBarbellLight />}
          </RatingIconContainer>
        ))}
      </RatingBarIcons>
      <RatingBarText>{`(Average Rating: ${rating} / 10)`}</RatingBarText>
    </StyledRatingBar>
  );
}

export default RatingBar;
