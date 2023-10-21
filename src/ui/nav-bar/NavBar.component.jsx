import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';

import { useIsAuthenticated } from '../../query/auth/useIsAuthenticated';
import { useLogout } from '../../query/auth/useLogout';

import NavBarMenu from '../nav-bar-menu/NavBarMenu.component';

import {
  HomeButton,
  LoginButton,
  NavBarButton,
  NavBarButtonsContainer,
  NavBarMobileMenuButton,
  SearchBar,
  SearchBarContainer,
  StyledNavBar,
} from './NavBar.styles';
import MobileMenu from '../mobile-menu/MobileMenu.component';

function NavBar() {
  const [search, setSearch] = useState('');
  const [navMenuActive, setNavMenuActive] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  const { authData } = useIsAuthenticated();
  const { isLoggingOut, logout } = useLogout();

  function handleOnSearch(e) {
    e.preventDefault();

    if (location.pathname.includes('search')) {
      searchParams.set('gym', search);
      setSearchParams(searchParams);
    } else {
      navigate(`/search?gym=${search}`);
    }

    setSearch('');
  }

  return (
    <StyledNavBar>
      <HomeButton to="/">
        <GiWeightLiftingUp />
        <p>GymBuddy</p>
      </HomeButton>
      <NavBarMobileMenuButton onClick={() => setMobileNavActive(true)}>
        <GiWeightLiftingUp />
      </NavBarMobileMenuButton>
      {(!location.pathname.includes('search') || searchParams.get('gym')) && (
        <SearchBarContainer onSubmit={handleOnSearch}>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch />
        </SearchBarContainer>
      )}

      <NavBarButtonsContainer>
        {authData?.isAuthenticated ? (
          <>
            <NavBarButton disabled={isLoggingOut} onClick={logout}>
              Logout
            </NavBarButton>
            <NavBarButton
              onClick={() =>
                setNavMenuActive((navMenuActive) => !navMenuActive)
              }
            >
              ...
            </NavBarButton>
          </>
        ) : (
          <LoginButton
            href={`${
              import.meta.env.VITE_GYM_BUDDY_API_URL
            }/auth/google?return=${location.pathname}`}
          >
            Login
          </LoginButton>
        )}
      </NavBarButtonsContainer>
      {navMenuActive && <NavBarMenu />}
      {mobileNavActive && (
        <MobileMenu setMobileNavActive={setMobileNavActive} />
      )}
    </StyledNavBar>
  );
}

export default NavBar;
