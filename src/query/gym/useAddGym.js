import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addGym as addGymApi } from '../../services/apiGyms';

export function useAddGym() {
  const queryClient = useQueryClient();

  const {
    mutate: addGym,
    isPending: isAddingGym,
    data: newGymData,
  } = useMutation({
    mutationFn: async (gymData) => {
      const response = await addGymApi(gymData);
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isAddingGym, newGymData, addGym };
}
