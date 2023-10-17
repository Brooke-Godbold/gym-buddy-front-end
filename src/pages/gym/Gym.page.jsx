import EquipmentList from '../../features/equipment/equipment-list/EquipmentList.component';
import GymDetails from '../../features/gyms/gym-details/GymDetails.component';
import ReviewList from '../../features/reviews/review-list/ReviewList.component';
//import PageLoadContainer from '../../ui/page-load-container/PageLoadContainer.component';

import { StyledGym } from './Gym.styles';

function Gym() {
  return (
    <StyledGym>
      <GymDetails />
      <EquipmentList />
      <ReviewList />
    </StyledGym>
  );
}

export default Gym;
