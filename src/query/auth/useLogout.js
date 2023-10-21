import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '../../services/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    isFetching: isLoggingOut,
    data: logoutData,
  } = useMutation({
    mutationFn: async () => {
      const response = await postLogout();
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      queryClient.invalidateQueries({ queryKey: ['auth_user'] });
    },
  });

  return { isLoggingOut, logoutData, logout };
}
