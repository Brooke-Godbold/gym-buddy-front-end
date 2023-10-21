import styled from 'styled-components';
import { CommonScrollbar } from '../../styles/GlobalStyles';

const TextArea = styled.textarea`
  ${CommonScrollbar}

  border: none;

  padding: 1.2rem 1.8rem;

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  background-color: var(--color-brand-100);

  resize: none;

  height: 20rem;
  overflow-y: scroll;

  @media (max-width: 30em) {
    font-size: 1.2rem;
  }
`;

export { TextArea };
