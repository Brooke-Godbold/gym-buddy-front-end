import { useMutation, useQueryClient } from '@tanstack/react-query';
import { voteReview as voteReviewApi } from '../../services/apiGyms';

export function useVoteReview() {
  const queryClient = useQueryClient();

  const {
    mutate: voteReview,
    isPending: isVotingReview,
    data: newReviewData,
  } = useMutation({
    mutationFn: async (data) => {
      const response = await voteReviewApi(data.reviewId, data.voteData);
      return response?.data || null;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['gyms'] });
    },
  });

  return { isVotingReview, newReviewData, voteReview };
}
