import { useParams } from 'react-router-dom';

import { useGetGymById } from '../../../query/gym/useGetGymById';
import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';
import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';

import ListContainer from '../../../ui/list-container/ListContainer.component';
import ReviewSummary from '../review-summary/ReviewSummary.component';
import Modal from '../../../ui/modal/Modal.component';
import AddReviewForm from '../add-review-form/AddReviewForm.component';

import {
  ListSectionButton,
  ListSectionHeader,
  ListSectionHeading,
  StyledListSection,
} from '../../../ui/list-section/ListSection.styles';
import { NoItemsHeading } from '../../../ui/list-container/ListContainer.styles';

function ReviewList() {
  const { id } = useParams();

  const { gymData } = useGetGymById(id);
  const { authData } = useIsAuthenticated();
  const { isFetchingUser, userData } = useGetAuthenticatedUser(
    authData?.isAuthenticated
  );

  const existingReview = gymData?.reviews.find(
    (review) => review.userId === userData?.userId
  );

  return (
    <StyledListSection>
      <ListSectionHeader>
        <ListSectionHeading>Reviews</ListSectionHeading>

        {authData?.isAuthenticated && !isFetchingUser && (
          <Modal>
            <Modal.Open opens="addReview">
              <ListSectionButton>
                {existingReview ? 'Edit Review' : 'Add Review'}
              </ListSectionButton>
            </Modal.Open>
            <Modal.Window name="addReview">
              <AddReviewForm editReviewData={existingReview} />
            </Modal.Window>
          </Modal>
        )}
      </ListSectionHeader>
      <ListContainer columns={gymData.reviews.length > 0 ? 2 : 1}>
        {existingReview && (
          <ReviewSummary
            key={existingReview.reviewId}
            review={existingReview}
          />
        )}
        {gymData.reviews.length > 0 ? (
          gymData.reviews
            .filter((review) => review != existingReview)
            .map((review) => (
              <ReviewSummary key={review.reviewId} review={review} />
            ))
        ) : (
          <NoItemsHeading>No Reviews submitted yet</NoItemsHeading>
        )}
      </ListContainer>
    </StyledListSection>
  );
}

export default ReviewList;
