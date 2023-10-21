import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';
import { useAddReview } from '../../../query/gym/useAddReview';
import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';

import RatingBar from '../../../ui/rating-bar/RatingBar.component';
import TextCount from '../../../ui/text-count/TextCount.component';
import ButtonLoadContainer from '../../../ui/button-load-container/ButtonLoadContainer.component';

import { TextArea } from '../../../ui/text-area/TextArea.styles';
import { Input } from '../../../ui/input/Input.styles';
import {
  FormSection,
  StyledForm,
  SubmitFormButton,
} from '../../../ui/form/Form.styles';

import {
  MAX_REVIEW_CONTENT,
  MAX_REVIEW_SUMMARY,
  MIN_REVIEW_CONTENT,
  MIN_REVIEW_SUMMARY,
} from '../../../data/consts';

function AddReviewForm({ onCloseModal, editReviewData }) {
  const { id } = useParams();

  const { handleSubmit, register, setValue, watch } = useForm();
  const summaryValue = watch('summary') || '';
  const contentValue = watch('content') || '';
  const ratingValue = watch('rating') || null;

  const { authData } = useIsAuthenticated();
  const { isFetchingUser, userData } = useGetAuthenticatedUser(
    authData?.isAuthenticated
  );
  const { addReview, isAddingReview } = useAddReview();

  if (!isFetchingUser && !userData) onCloseModal?.();

  function handleSubmitReview(e) {
    const reviewData = {
      userId: userData.userId,
      summary: e.summary,
      content: e.content,
      rating: Number(e.rating),
    };

    const data = {
      gymId: id,
      reviewData,
    };

    addReview(data, {
      onSuccess: () => {
        onCloseModal?.();
        toast('Your review has been submitted!');
      },
    });
  }

  function handleErrors(e) {
    for (var key in e) {
      toast.error(e[key].message, { id: `error_${e[key].message}` });
    }
  }

  useEffect(() => {
    if (editReviewData) setValue('rating', editReviewData.rating);
  }, [setValue, editReviewData]);

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitReview, handleErrors)}>
      <h2>Add Review</h2>
      <FormSection>
        <h3>Review Summary</h3>
        <Input
          id="summary"
          disabled={isAddingReview}
          defaultValue={editReviewData?.summary}
          {...register('summary', {
            required: {
              value: true,
              message: 'You must input a Summary',
            },
            maxLength: {
              value: MAX_REVIEW_SUMMARY,
              message: `Summary must be less than ${MAX_REVIEW_SUMMARY} characters`,
            },
            minLength: {
              value: MIN_REVIEW_SUMMARY,
              message: `Summary must be at least ${MIN_REVIEW_SUMMARY} characters`,
            },
          })}
        />
        <TextCount
          value={summaryValue}
          minLength={MIN_REVIEW_SUMMARY}
          maxLength={MAX_REVIEW_SUMMARY}
        />
      </FormSection>
      <FormSection>
        <h3>Rating</h3>
        <RatingBar
          canEdit={!isAddingReview}
          register={register}
          setValue={setValue}
          userRating={Number(ratingValue) || editReviewData?.rating}
        />
      </FormSection>
      <FormSection>
        <h3>Review</h3>
        <TextArea
          id="content"
          disabled={isAddingReview}
          defaultValue={editReviewData?.content || ''}
          {...register('content', {
            required: {
              value: true,
              message: 'You must input a Review',
            },
            maxLength: {
              value: MAX_REVIEW_CONTENT,
              message: `Review must be less than ${MAX_REVIEW_CONTENT} characters`,
            },
            minLength: {
              value: MIN_REVIEW_CONTENT,
              message: `Review must be at least ${MIN_REVIEW_CONTENT} characters`,
            },
          })}
        />
        <TextCount
          value={contentValue}
          minLength={MIN_REVIEW_CONTENT}
          maxLength={MAX_REVIEW_CONTENT}
        />
      </FormSection>
      <SubmitFormButton disabled={isAddingReview}>
        {isAddingReview ? <ButtonLoadContainer /> : 'Submit'}
      </SubmitFormButton>
    </StyledForm>
  );
}

AddReviewForm.propTypes = {
  onCloseModal: PropTypes.func,
  editReviewData: PropTypes.object,
};

export default AddReviewForm;
