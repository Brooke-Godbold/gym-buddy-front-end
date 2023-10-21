import styled from 'styled-components';

const StyledNavBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1.2rem;

  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  background-color: var(--color-brand-100);

  position: absolute;
  top: 110%;
  right: 4.8rem;

  & button {
    text-align: right;
    justify-content: flex-end;
  }

  @media (max-width: 45em) {
    right: 2.4rem;
  }
`;

export { StyledNavBarMenu };
