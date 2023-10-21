import RecentReview from '../recent-review/RecentReview.component';
import {
  RecentReviewsList,
  StyledRecentReviewsSection,
} from './RecentReviewsSection.styles';

function RecentReviewsSection() {
  const review = {
    userId: 0,
    reviewId: 0,
    gymId: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima adipisci, asperiores cupiditate voluptate eligendi magnam commodi. Doloribus tempore cupiditate porro perspiciatis exercitationem saepe maxime aspernatur assumenda, laborum sint totam.',
    summary: 'Vero minima adipisci, asperiores cupiditate voluptate',
    rating: 8,
    votes: [32, 89],
  };

  return (
    <StyledRecentReviewsSection>
      <h1>Recent Reviews</h1>
      <RecentReviewsList>
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
        <RecentReview review={review} />
      </RecentReviewsList>
    </StyledRecentReviewsSection>
  );
}

export default RecentReviewsSection;
