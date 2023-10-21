import PropTypes from 'prop-types';

import UsefulnessSelection from '../../../ui/usefulness-selection/UsefulnessSelection.component';
import RatingBar from '../../../ui/rating-bar/RatingBar.component';

import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';
import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';
import { useVoteReview } from '../../../query/gym/useVoteReview';

import {
  ReviewDetailsContent,
  ReviewDetailsHeading,
  ReviewUsefulnessContainer,
  StyledReviewDetails,
} from './ReviewDetails.styles';

function ReviewDetails({ review }) {
  const { authData } = useIsAuthenticated();
  const { userData } = useGetAuthenticatedUser(authData?.isAuthenticated);
  const { isVotingReview, voteReview } = useVoteReview();

  function handleVoteReview() {
    const data = {
      reviewId: review.reviewId,
      voteData: {
        userId: userData?.userId,
      },
    };

    voteReview(data);
  }

  return (
    <StyledReviewDetails>
      <ReviewDetailsHeading>{review.summary}</ReviewDetailsHeading>
      <RatingBar canEdit={false} avgRating={review.rating} />
      <ReviewDetailsContent>{review.content}</ReviewDetailsContent>
      {review.userId === userData?.userId && <div></div>}
      {authData?.isAuthenticated && (
        <ReviewUsefulnessContainer>
          <UsefulnessSelection
            votes={review.votes}
            voteAction={handleVoteReview}
            canVote={!isVotingReview}
            active={review.votes.includes(Number(userData?.userId))}
            userOwned={userData?.userId == review.userId}
          />
        </ReviewUsefulnessContainer>
      )}
    </StyledReviewDetails>
  );
}

ReviewDetails.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewDetails;
