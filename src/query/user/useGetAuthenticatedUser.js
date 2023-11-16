import { useQuery } from '@tanstack/react-query';

import { getAuthenticatedUser } from '../../services/apiUser';

import { useIsAuthenticated } from '../auth/useIsAuthenticated';

export function useGetAuthenticatedUser() {
  const { isFetchingAuth, authData } = useIsAuthenticated();

  const { isFetching: isFetchingUser, data: userData } = useQuery({
    queryKey: ['auth_user'],
    queryFn: async () => {
      if (isFetchingAuth || !authData?.isAuthenticated) return null;

      const response = await getAuthenticatedUser();
      return response?.data || null;
    },
  });

  return { isFetchingUser, userData };
}
