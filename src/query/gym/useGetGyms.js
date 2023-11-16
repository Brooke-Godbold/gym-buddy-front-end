import { useQuery } from '@tanstack/react-query';
import { getGyms } from '../../services/apiGyms';

export function useGetGyms(searchQuery, limit) {
  const { isFetching: isFetchingGyms, data: gymsData } = useQuery({
    queryKey: ['gyms', searchQuery, limit],
    queryFn: async () => {
      if (!searchQuery && !limit) return null;

      const response = await getGyms(searchQuery, limit);
      return response?.data || null;
    },
  });

  return { isFetchingGyms, gymsData };
}
