import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import RatingBar from '../../../ui/rating-bar/RatingBar.component';

import {
  AddressBlock,
  DetailsBlock,
  GymDetailsImage,
  GymDetailsImageContainer,
  GymName,
  StyledGymDetails,
} from './GymDetails.styles';

function GymDetails({ gymData }) {
  const location = useLocation();

  return (
    <StyledGymDetails
      $nav={location.pathname.includes('search')}
      to={location.pathname.includes('search') && `/gym/${gymData.gymId}`}
    >
      <GymDetailsImageContainer>
        <GymDetailsImage src="https://hips.hearstapps.com/hmg-prod/images/best-luxury-gyms-london-1577449934.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" />
      </GymDetailsImageContainer>
      <DetailsBlock>
        <GymName>{gymData.name}</GymName>
        <RatingBar canEdit={false} avgRating={gymData.avgRating} />
        <AddressBlock>
          <p>{gymData.address.line1}</p>
          {gymData.address.line2 && <p>{gymData.address.line2}</p>}
          <p>{gymData.address.city}</p>
          <p>{gymData.address.county}</p>
          <p>{gymData.address.postcode}</p>
        </AddressBlock>
      </DetailsBlock>
    </StyledGymDetails>
  );
}

GymDetails.propTypes = {
  gymData: PropTypes.object.isRequired,
};

export default GymDetails;
