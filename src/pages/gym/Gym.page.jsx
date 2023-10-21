import { useParams } from 'react-router-dom';

import { useGetGymById } from '../../query/gym/useGetGymById';

import EquipmentList from '../../features/equipment/equipment-list/EquipmentList.component';
import GymDetails from '../../features/gyms/gym-details/GymDetails.component';
import ReviewList from '../../features/reviews/review-list/ReviewList.component';
import PageLoadContainer from '../../ui/page-load-container/PageLoadContainer.component';

import { StyledGym } from './Gym.styles';
import PageErrorContainer from '../../ui/page-error-container/PageErrorContainer.component';

function Gym() {
  const { id } = useParams();

  const { isFetchingGym, gymData } = useGetGymById(id);

  const noGymError = {
    heading: '404',
    text: `Looks like that Gym doesn't exist!`,
  };

  return (
    <StyledGym>
      {!gymData ? (
        isFetchingGym ? (
          <PageLoadContainer />
        ) : (
          <PageErrorContainer error={noGymError} />
        )
      ) : (
        <>
          <GymDetails gymData={gymData} />
          <EquipmentList />
          <ReviewList />
        </>
      )}
    </StyledGym>
  );
}

export default Gym;
