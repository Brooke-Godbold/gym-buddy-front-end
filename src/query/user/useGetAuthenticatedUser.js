import { useQuery } from '@tanstack/react-query';
import { getAuthenticatedUser } from '../../services/apiUser';

export function useGetAuthenticatedUser(authenticated) {
  const { isFetching: isFetchingUser, data: userData } = useQuery({
    queryKey: ['auth_user'],
    queryFn: async () => {
      if (!authenticated) return null;

      const response = await getAuthenticatedUser();
      return response?.data || null;
    },
  });

  return { isFetchingUser, userData };
}
