import PropTypes from 'prop-types';

import { useLocation, useNavigate } from 'react-router-dom';

import { useIsAuthenticated } from '../../query/auth/useIsAuthenticated';
import { useLogout } from '../../query/auth/useLogout';

import {
  MobileMenuButton,
  MobileMenuHeading,
  MobileMenuNavLink,
  MobileMenuOverlay,
  StyledMobileMenu,
} from './MobileMenu.styles';

function MobileMenu({ setMobileNavActive }) {
  const { authData } = useIsAuthenticated();
  const { isLoggingOut, logout } = useLogout();

  const navigate = useNavigate();
  const location = useLocation();

  function handleHome() {
    navigate('/');
    setMobileNavActive(false);
  }

  return (
    <MobileMenuOverlay>
      <StyledMobileMenu>
        <MobileMenuHeading>Menu</MobileMenuHeading>
        <MobileMenuButton onClick={() => setMobileNavActive(false)}>
          Back
        </MobileMenuButton>
        <MobileMenuButton onClick={handleHome}>Home</MobileMenuButton>
        {authData?.isAuthenticated ? (
          <>
            <MobileMenuNavLink>My Workout</MobileMenuNavLink>
            <MobileMenuNavLink>Account</MobileMenuNavLink>
            <MobileMenuButton>Add a Gym</MobileMenuButton>
            <MobileMenuButton disabled={isLoggingOut} onClick={logout}>
              Logout
            </MobileMenuButton>
          </>
        ) : (
          <MobileMenuButton
            href={`${
              import.meta.env.VITE_GYM_BUDDY_API_URL
            }/auth/google?return=${location.pathname}`}
          >
            Login
          </MobileMenuButton>
        )}
      </StyledMobileMenu>
    </MobileMenuOverlay>
  );
}

MobileMenu.propTypes = {
  setMobileNavActive: PropTypes.func.isRequired,
};

export default MobileMenu;
