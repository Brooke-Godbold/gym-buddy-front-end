import styled from 'styled-components';

const Input = styled.input`
  border: none;

  padding: 1.2rem 1.8rem;

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  background-color: var(--color-brand-100);

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export { Input };
