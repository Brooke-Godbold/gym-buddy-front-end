import { AiOutlineSearch } from 'react-icons/ai';
import { GiWeightLiftingUp } from 'react-icons/gi';

import {
  HomeButton,
  LoginButton,
  SearchBar,
  SearchBarContainer,
  StyledNavBar,
} from './NavBar.styles';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function NavBar() {
  const [search, setSearch] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

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
      <SearchBarContainer onSubmit={handleOnSearch}>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <AiOutlineSearch />
      </SearchBarContainer>
      <LoginButton>Login</LoginButton>
    </StyledNavBar>
  );
}

export default NavBar;
