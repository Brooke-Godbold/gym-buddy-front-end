import PropTypes from 'prop-types';

import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';
import { useVoteReview } from '../../../query/gym/useVoteReview';

import Modal from '../../../ui/modal/Modal.component';
import ReviewDetails from '../review-details/ReviewDetails.component';
import UsefulnessSelection from '../../../ui/usefulness-selection/UsefulnessSelection.component';
import RatingBar from '../../../ui/rating-bar/RatingBar.component';

import {
  ReviewSummaryButton,
  ReviewSummaryContent,
  ReviewSummaryHeading,
  ReviewUsefulnessContainer,
  StyledReviewSummary,
} from './ReviewSummary.styles';

function ReviewSummary({ review }) {
  const { userData } = useGetAuthenticatedUser();
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
    <StyledReviewSummary $ownedReview={review.userId === userData?.userId}>
      <ReviewSummaryHeading>{review.summary}</ReviewSummaryHeading>
      <RatingBar canEdit={false} avgRating={review.rating} />
      <ReviewSummaryContent>{review.content}</ReviewSummaryContent>
      <div>
        <Modal>
          <Modal.Open opens="review">
            <ReviewSummaryButton>View More</ReviewSummaryButton>
          </Modal.Open>
          <Modal.Window name="review">
            <ReviewDetails review={review} />
          </Modal.Window>
        </Modal>
      </div>
      <ReviewUsefulnessContainer>
        <UsefulnessSelection
          votes={review.votes}
          voteAction={handleVoteReview}
          canVote={!isVotingReview}
          active={review.votes.includes(Number(userData?.userId))}
          userOwned={userData?.userId == review.userId}
        />
      </ReviewUsefulnessContainer>
    </StyledReviewSummary>
  );
}

ReviewSummary.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewSummary;
