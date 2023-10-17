import { styled } from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  padding: 3rem;

  background-color: var(--color-brand-200);
  color: var(--color-brand-700);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  border: none;
  border-radius: 5px;
  background: none;
  right: 0.75rem;
  top: 0.75rem;

  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand-500);
  box-shadow: var(--shadow-md);

  transition: all 0.3s;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-600);

    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--color-brand-600);

    & svg {
      color: var(--color-brand-700);
    }
  }
`;

export { StyledModal, Overlay, ModalCloseButton };
