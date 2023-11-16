import PropTypes from 'prop-types';
import {
  RecentReviewContent,
  RecentReviewHeading,
  RecentReviewLink,
  RecentReviewLinkContainer,
  StyledRecentReview,
} from './RecentReview.styles';
import RatingBar from '../../../ui/rating-bar/RatingBar.component';

function RecentReview({ review }) {
  return (
    <StyledRecentReview id={`review-${review.reviewId}`}>
      <RecentReviewHeading>{review.summary}</RecentReviewHeading>
      <RatingBar canEdit={false} avgRating={review.rating} />
      <RecentReviewContent>{review.content}</RecentReviewContent>
      <RecentReviewLinkContainer>
        <RecentReviewLink to={`/gym/${review.gymId}`}>
          View this Gym
        </RecentReviewLink>
      </RecentReviewLinkContainer>
    </StyledRecentReview>
  );
}

RecentReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default RecentReview;
