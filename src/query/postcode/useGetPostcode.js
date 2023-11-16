import { useQuery } from '@tanstack/react-query';
import { getPostcode } from '../../services/apiPostcodes';

export function useGetPostcode(userPosition) {
  const { isFetching: isFetchingPostcode, data: postcodeData } = useQuery({
    queryKey: ['postcode', userPosition],
    queryFn: async () => {
      if (!userPosition) return null;

      const response = await getPostcode(
        userPosition.coords.longitude,
        userPosition.coords.latitude
      );
      return response?.data || null;
    },
  });

  return { isFetchingPostcode, postcodeData };
}
