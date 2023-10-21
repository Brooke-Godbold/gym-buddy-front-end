import { useMutation, useQueryClient } from '@tanstack/react-query';
import { rateEquipment as rateEquipmentApi } from '../../services/apiGyms';

export function useRateEquipment() {
  const queryClient = useQueryClient();

  const {
    mutate: rateEquipment,
    isPending: isRatingEquipment,
    data: newEquipmentData,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await rateEquipmentApi(
        data.equipmentId,
        data.qualityData
      );
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isRatingEquipment, newEquipmentData, rateEquipment };
}
