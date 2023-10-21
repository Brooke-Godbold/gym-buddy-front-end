import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';
import { useAddEquipment } from '../../../query/gym/useAddEquipment';

import RatingBar from '../../../ui/rating-bar/RatingBar.component';
import TextCount from '../../../ui/text-count/TextCount.component';
import ButtonLoadContainer from '../../../ui/button-load-container/ButtonLoadContainer.component';

import {
  FormSection,
  StyledForm,
  SubmitFormButton,
} from '../../../ui/form/Form.styles';
import { Input } from '../../../ui/input/Input.styles';

import { MAX_EQUIPMENT_NAME, MIN_EQUIPMENT_NAME } from '../../../data/consts';
import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';

function AddEquipmentForm({ onCloseModal }) {
  const { id } = useParams();

  const { authData } = useIsAuthenticated();
  const { isFetchingUser, userData } = useGetAuthenticatedUser(
    authData?.isAuthenticated
  );
  const { isAddingEquipment, addEquipment } = useAddEquipment();

  const { register, setValue, watch, handleSubmit } = useForm();
  const nameValue = watch('name') || '';

  if (!isFetchingUser && !userData) onCloseModal?.();

  function handleSubmitEquipment(e) {
    const equipmentData = {
      userId: userData?.userId,
      name: e.name,
      quality: {
        userId: 1,
        rating: Number(e.rating),
      },
    };

    const data = {
      gymId: id,
      equipmentData,
    };

    addEquipment(data, {
      onSuccess: () => {
        onCloseModal?.();
        toast('This equipment has been submitted!');
      },
    });
  }

  function handleErrors(e) {
    for (var key in e) {
      toast.error(e[key].message, { id: `error_${e[key].message}` });
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitEquipment, handleErrors)}>
      <h2>Add Equipment</h2>
      <FormSection>
        <h3>Equipment Name</h3>
        <Input
          id="name"
          disabled={isAddingEquipment}
          {...register('name', {
            required: {
              value: true,
              message: 'You must input a Name',
            },
            maxLength: {
              value: MAX_EQUIPMENT_NAME,
              message: `Name must be less than ${MAX_EQUIPMENT_NAME} characters`,
            },
            minLength: {
              value: MIN_EQUIPMENT_NAME,
              message: `Name must be at least ${MIN_EQUIPMENT_NAME} characters`,
            },
          })}
        />
        <TextCount
          value={nameValue}
          minLength={MIN_EQUIPMENT_NAME}
          maxLength={MAX_EQUIPMENT_NAME}
        />
      </FormSection>
      <FormSection>
        <h3>Rating</h3>
        <RatingBar
          canEdit={!isAddingEquipment}
          register={register}
          setValue={setValue}
        />
      </FormSection>
      <SubmitFormButton disabled={isAddingEquipment}>
        {isAddingEquipment ? <ButtonLoadContainer /> : 'Submit'}
      </SubmitFormButton>
    </StyledForm>
  );
}

AddEquipmentForm.propTypes = {
  onCloseModal: PropTypes.func,
};

export default AddEquipmentForm;
