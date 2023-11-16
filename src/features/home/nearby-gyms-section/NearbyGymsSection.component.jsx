import { useEffect, useState } from 'react';
import { useGetGyms } from '../../../query/gym/useGetGyms';
import { Spinner } from '../../../ui/spinner/Spinner.styles';
import GymDetails from '../../gyms/gym-details/GymDetails.component';
import {
  NearbyGymsList,
  StyledNearbyGymsSection,
} from './NearbyGymsSection.styles';
import { useGetPostcode } from '../../../query/postcode/useGetPostcode';

function NearbyGymsSection() {
  const [userPosition, setUserPosition] = useState(null);
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition(position);
        },
        (error) => console.error('Error retrieving location: ', error)
      );
    } else {
      console.error('Geolocation not supported');
    }
  };

  const [userPostcode, setUserPostcode] = useState(null);
  const { isFetchingPostcode, postcodeData } = useGetPostcode(userPosition);

  const { isFetchingGyms: isFetchingNearbyGyms, gymsData: nearbyGyms } =
    useGetGyms(userPostcode, 5);
  const { isFetchingGyms, gymsData } = useGetGyms('', 5);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!postcodeData?.result?.[0]?.outcode) return;

    setUserPostcode(postcodeData.result[0].outcode);
  }, [postcodeData]);

  return (
    <StyledNearbyGymsSection>
      {nearbyGyms?.length > 0 ? (
        <h1 id="gyms-list-heading">Gyms Near You</h1>
      ) : (
        <h1 id="gyms-list-heading">See our Gyms</h1>
      )}
      <NearbyGymsList id="nearby-gyms-list">
        {isFetchingGyms || isFetchingNearbyGyms || isFetchingPostcode ? (
          <Spinner />
        ) : nearbyGyms?.length > 0 ? (
          nearbyGyms?.map((gym) => <GymDetails key={gym.gymId} gymData={gym} />)
        ) : (
          gymsData?.map((gym) => <GymDetails key={gym.gymId} gymData={gym} />)
        )}
      </NearbyGymsList>
    </StyledNearbyGymsSection>
  );
}

export default NearbyGymsSection;
