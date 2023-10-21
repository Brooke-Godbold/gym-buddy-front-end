import { useQuery } from '@tanstack/react-query';
import { getGymById } from '../../services/apiGyms';

export function useGetGymById(gymId) {
  const { isFetching: isFetchingGym, data: gymData } = useQuery({
    queryKey: ['gyms', `gym_${gymId}`],
    queryFn: async () => {
      const response = await getGymById(gymId);
      return response?.data || null;
    },
  });

  return { isFetchingGym, gymData };
}
