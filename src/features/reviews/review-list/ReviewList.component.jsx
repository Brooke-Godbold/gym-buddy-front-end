import ListContainer from '../../../ui/list-container/ListContainer.component';

import {
  ListSectionButton,
  ListSectionHeader,
  ListSectionHeading,
  StyledListSection,
} from '../../../ui/list-section/ListSection.styles';
import ReviewSummary from '../review-summary/ReviewSummary.component';

function ReviewList() {
  return (
    <StyledListSection>
      <ListSectionHeader>
        <ListSectionHeading>Reviews</ListSectionHeading>
        <ListSectionButton>Add Review</ListSectionButton>
      </ListSectionHeader>
      <ListContainer>
        <ReviewSummary />
        <ReviewSummary />
        <ReviewSummary />
        <ReviewSummary />
        <ReviewSummary />
      </ListContainer>
    </StyledListSection>
  );
}

export default ReviewList;
