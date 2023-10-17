import UsefulnessSelection from '../../../ui/usefulness-selection/UsefulnessSelection.component';
import {
  ReviewDetailsContent,
  ReviewDetailsHeading,
  StyledReviewDetails,
} from './ReviewDetails.styles';

function ReviewDetails() {
  return (
    <StyledReviewDetails>
      <ReviewDetailsHeading>Review Title</ReviewDetailsHeading>
      <UsefulnessSelection />
      <ReviewDetailsContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum
        nemo vero esse maiores hic optio commodi iure ratione eius, possimus
        voluptatem modi quae illum autem blanditiis officia dolorem delectus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum
        nemo vero esse maiores hic optio commodi iure ratione eius, possimus
        voluptatem modi quae illum autem blanditiis officia dolorem delectus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum
        nemo vero esse maiores hic optio commodi iure ratione eius, possimus
        voluptatem modi quae illum autem blanditiis officia dolorem delectus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, cum
        nemo vero esse maiores hic optio commodi iure ratione eius, possimus
        voluptatem modi quae illum autem blanditiis officia dolorem delectus!
      </ReviewDetailsContent>
    </StyledReviewDetails>
  );
}

export default ReviewDetails;
