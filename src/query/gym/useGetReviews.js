import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../services/apiGyms';

export function useGetReviews(limit) {
  const { isFetching: isFetchingReviews, data: reviewsData } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const response = await getReviews(limit);
      return response?.data || null;
    },
  });

  return { isFetchingReviews, reviewsData };
}
