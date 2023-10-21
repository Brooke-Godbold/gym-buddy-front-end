import { useQuery } from '@tanstack/react-query';
import { getGyms } from '../../services/apiGyms';

export function useGetGyms(searchQuery) {
  const { isFetching: isFetchingGyms, data: gymsData } = useQuery({
    queryKey: ['gyms', searchQuery],
    queryFn: async () => {
      if (!searchQuery) return null;

      const response = await getGyms(searchQuery);
      return response?.data || null;
    },
  });

  return { isFetchingGyms, gymsData };
}
