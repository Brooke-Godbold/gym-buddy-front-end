import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.3s;
`;

const StyledMobileMenu = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const MobileMenuHeading = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
`;

const MobileMenuInteractable = css`
  width: 100%;

  padding: 0.8rem;

  border-radius: var(--border-radius-md);

  background-color: var(--color-brand-200);
  opacity: 0.85;
`;

const MobileMenuLink = styled.a`
  ${MobileMenuInteractable}
`;

const MobileMenuNavLink = styled(NavLink)`
  ${MobileMenuInteractable}
`;

const MobileMenuButton = styled.button`
  ${MobileMenuInteractable}

  border: none;
  text-align: start;
`;

export {
  MobileMenuOverlay,
  StyledMobileMenu,
  MobileMenuHeading,
  MobileMenuNavLink,
  MobileMenuButton,
  MobileMenuLink,
};
