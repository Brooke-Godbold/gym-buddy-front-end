import RatingBar from '../../../ui/rating-bar/RatingBar.component';
import {
  AddressBlock,
  DetailsBlock,
  GymDetailsImage,
  GymDetailsImageContainer,
  StyledGymDetails,
} from './GymDetails.styles';

function GymDetails() {
  return (
    <StyledGymDetails>
      <GymDetailsImageContainer>
        <GymDetailsImage src="https://hips.hearstapps.com/hmg-prod/images/best-luxury-gyms-london-1577449934.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" />
      </GymDetailsImageContainer>
      <DetailsBlock>
        <h1>Anytime Fitness Manchester</h1>
        <RatingBar />
        <AddressBlock>
          <p>10 Downtown Road</p>
          <p>Manchester</p>
          <p>Northumbria</p>
          <p>SE16 7YT</p>
        </AddressBlock>
      </DetailsBlock>
    </StyledGymDetails>
  );
}

export default GymDetails;
