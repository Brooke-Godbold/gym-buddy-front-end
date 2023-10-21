import styled from 'styled-components';
import { CommonButton } from '../../styles/GlobalStyles';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 25vw;

  @media (max-width: 120em) {
    width: 50vw;
  }

  @media (max-width: 80em) {
    width: 75vw;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SubmitFormButton = styled.button`
  ${CommonButton}

  background-color: var(--color-brand-400);

  height: 5.4rem;
`;

export { StyledForm, FormSection, SubmitFormButton };
