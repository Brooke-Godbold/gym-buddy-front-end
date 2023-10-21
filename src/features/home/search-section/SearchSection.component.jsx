import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { SearchHeading } from '../../../pages/search/Search.styles';
import {
  MainSearchBar,
  SearchBarSubContainer,
  SearchButton,
  StyledSearchSection,
} from './SearchSection.styles';

function SearchSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState('');

  function handleOnSearch(e) {
    e.preventDefault();

    searchParams.set('gym', search);
    setSearchParams(searchParams);
    setSearch('');
  }

  return (
    <StyledSearchSection onSubmit={handleOnSearch}>
      <SearchHeading>Search Gyms</SearchHeading>
      <SearchBarSubContainer>
        <MainSearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton onClick={handleOnSearch}>Search</SearchButton>
      </SearchBarSubContainer>
    </StyledSearchSection>
  );
}

export default SearchSection;
