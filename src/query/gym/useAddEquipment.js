import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addEquipment as addEquipmentApi } from '../../services/apiGyms';

export function useAddEquipment() {
  const queryClient = useQueryClient();

  const {
    mutate: addEquipment,
    isPending: isAddingEquipment,
    data: newEquipmentData,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await addEquipmentApi(data.gymId, data.equipmentData);
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isAddingEquipment, newEquipmentData, addEquipment };
}
