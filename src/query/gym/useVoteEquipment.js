import { useMutation, useQueryClient } from '@tanstack/react-query';
import { voteEquipment as voteEquipmentApi } from '../../services/apiGyms';

export function useVoteEquipment() {
  const queryClient = useQueryClient();

  const {
    mutate: voteEquipment,
    isPending: isVotingEquipment,
    data: newEquipmentData,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await voteEquipmentApi(
        data.equipmentId,
        data.accuracyData
      );
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isVotingEquipment, newEquipmentData, voteEquipment };
}
