import { useQuery } from '@tanstack/react-query';
import { getIsAuthenticated } from '../../services/apiAuth';

export function useIsAuthenticated() {
  const { isFetching: isFetchingAuth, data: authData } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const response = await getIsAuthenticated();
      return response?.data || null;
    },
  });

  return { isFetchingAuth, authData };
}
