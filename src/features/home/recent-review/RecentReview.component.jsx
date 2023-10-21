import PropTypes from 'prop-types';
import {
  RecentReviewContent,
  RecentReviewHeading,
  RecentReviewLink,
  StyledRecentReview,
} from './RecentReview.styles';
import RatingBar from '../../../ui/rating-bar/RatingBar.component';

function RecentReview({ review }) {
  return (
    <StyledRecentReview>
      <RecentReviewHeading>{review.summary}</RecentReviewHeading>
      <RatingBar canEdit={false} avgRating={review.rating} />
      <RecentReviewContent>{review.content}</RecentReviewContent>
      <div>
        <RecentReviewLink to={`/gym/${review.gymId}`}>
          View this Gym
        </RecentReviewLink>
      </div>
    </StyledRecentReview>
  );
}

RecentReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default RecentReview;
