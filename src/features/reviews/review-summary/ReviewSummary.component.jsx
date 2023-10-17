import PropTypes from 'prop-types';

import Modal from '../../../ui/modal/Modal.component';
import ReviewDetails from '../review-details/ReviewDetails.component';

import {
  ReviewSummaryContent,
  ReviewSummaryHeading,
  StyledReviewSummary,
} from './ReviewSummary.styles';
import UsefulnessSelection from '../../../ui/usefulness-selection/UsefulnessSelection.component';

function ReviewSummary() {
  return (
    <Modal>
      <Modal.Open opens="review">
        <ReviewSummaryDetails />
      </Modal.Open>
      <Modal.Window name="review">
        <ReviewDetails />
      </Modal.Window>
    </Modal>
  );
}

function ReviewSummaryDetails({ onClick }) {
  return (
    <StyledReviewSummary onClick={onClick}>
      <ReviewSummaryHeading>Review Heading</ReviewSummaryHeading>
      <UsefulnessSelection />
      <ReviewSummaryContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi maiores
        suscipit quasi quidem deserunt. Ut modi laboriosam cupiditate odit,
        facilis fugiat minima delectus error voluptatum, doloremque repellendus,
        saepe corrupti reprehenderit? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Animi maiores suscipit quasi quidem deserunt. Ut modi
        laboriosam cupiditate odit, facilis fugiat minima delectus error
        voluptatum, doloremque repellendus, saepe corrupti reprehenderit? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Animi maiores
        suscipit quasi quidem deserunt. Ut modi laboriosam cupiditate odit,
        facilis fugiat minima delectus error voluptatum, doloremque repellendus,
        saepe corrupti reprehenderit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Aperiam rem et facere molestiae distinctio reiciendis
        ab magnam, repellendus porro esse suscipit alias enim incidunt dolorum
        ratione aspernatur ipsum. Tempora, culpa!
      </ReviewSummaryContent>
    </StyledReviewSummary>
  );
}

ReviewSummaryDetails.propTypes = {
  onClick: PropTypes.func,
};

export default ReviewSummary;
