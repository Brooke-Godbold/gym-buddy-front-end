import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addReview as addReviewApi } from '../../services/apiGyms';

export function useAddReview() {
  const queryClient = useQueryClient();

  const {
    mutate: addReview,
    isPending: isAddingReview,
    data: newReviewData,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await addReviewApi(data.gymId, data.reviewData);
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isAddingReview, newReviewData, addReview };
}
