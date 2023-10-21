import GymDetails from '../../gyms/gym-details/GymDetails.component';
import {
  NearbyGymsList,
  StyledNearbyGymsSection,
} from './NearbyGymsSection.styles';

function NearbyGymsSection() {
  const gymData = {
    gymId: 1,
    name: 'Sunnyvale Gym',
    address: {
      line1: 'lorem',
      city: 'London',
      county: 'Greater London',
      postcode: 'SE16 7RT',
    },
    avgRating: 8,
  };

  return (
    <StyledNearbyGymsSection>
      <h1>Gyms Near You</h1>
      <NearbyGymsList>
        <GymDetails gymData={gymData} />
        <GymDetails gymData={gymData} />
        <GymDetails gymData={gymData} />
        <GymDetails gymData={gymData} />
        <GymDetails gymData={gymData} />
      </NearbyGymsList>
    </StyledNearbyGymsSection>
  );
}

export default NearbyGymsSection;
