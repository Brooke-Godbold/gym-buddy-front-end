import { useGetReviews } from '../../../query/gym/useGetReviews';
import { Spinner } from '../../../ui/spinner/Spinner.styles';
import RecentReview from '../recent-review/RecentReview.component';
import {
  RecentReviewsList,
  StyledRecentReviewsSection,
} from './RecentReviewsSection.styles';

function RecentReviewsSection() {
  const { isFetchingReviews, reviewsData } = useGetReviews(10);

  return (
    <StyledRecentReviewsSection>
      <h1>Recent Reviews</h1>
      <RecentReviewsList id="recent-reviews-list">
        {!reviewsData && isFetchingReviews ? (
          <Spinner />
        ) : (
          reviewsData?.map((review) => (
            <RecentReview key={review.reviewId} review={review} />
          ))
        )}
      </RecentReviewsList>
    </StyledRecentReviewsSection>
  );
}

export default RecentReviewsSection;
