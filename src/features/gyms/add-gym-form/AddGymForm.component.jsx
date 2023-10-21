import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAddGym } from '../../../query/gym/useAddGym';

import ButtonLoadContainer from '../../../ui/button-load-container/ButtonLoadContainer.component';

import {
  FormSection,
  StyledForm,
  SubmitFormButton,
} from '../../../ui/form/Form.styles';
import { Input } from '../../../ui/input/Input.styles';

function AddGymForm({ onCloseModal }) {
  const { register, handleSubmit } = useForm();

  const { addGym, isAddingGym } = useAddGym();

  function handleAddGym(e) {
    const gymData = {
      name: e.name,
      address: {
        line1: e.line1,
        ...(e.line2 && { line2: e.line2 }),
        city: e.city,
        county: e.county,
        postcode: e.postcode,
      },
    };

    addGym(gymData, {
      onSuccess: () => {
        toast(
          'This gym has been submitted! We will review this before approving it!'
        );
        onCloseModal?.();
      },
    });
  }

  function handleErrors(e) {
    for (var key in e) {
      toast.error(e[key].message, { id: `error_${e[key].message}` });
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleAddGym, handleErrors)}>
      <h2>Add Gym</h2>
      <FormSection>
        <h3>Gym Name</h3>
        <Input
          id="name"
          {...register('name', {
            required: {
              value: true,
              message: 'You must input a Name',
            },
          })}
        />
      </FormSection>
      <FormSection>
        <h3>Address Line 1</h3>
        <Input
          id="line1"
          {...register('line1', {
            required: {
              value: true,
              message: 'You must input Address Line 1',
            },
          })}
        />
      </FormSection>
      <FormSection>
        <h3>Address Line 2</h3>
        <Input id="line2" />
      </FormSection>
      <FormSection>
        <h3>City</h3>
        <Input
          id="city"
          {...register('city', {
            required: {
              value: true,
              message: 'You must input a City',
            },
          })}
        />
      </FormSection>
      <FormSection>
        <h3>County</h3>
        <Input
          id="county"
          {...register('county', {
            required: {
              value: true,
              message: 'You must input a County',
            },
          })}
        />
      </FormSection>
      <FormSection>
        <h3>Postcode</h3>
        <Input
          id="postcode"
          {...register('postcode', {
            required: {
              value: true,
              message: 'You must input a Postcode',
            },
          })}
        />
      </FormSection>
      <SubmitFormButton disabled={isAddingGym}>
        {isAddingGym ? <ButtonLoadContainer /> : 'Submit'}
      </SubmitFormButton>
    </StyledForm>
  );
}

AddGymForm.propTypes = {
  onCloseModal: PropTypes.func,
};

export default AddGymForm;
