import ListContainer from '../../ui/list-container/ListContainer.component';
import SearchItem from '../../ui/search-item/SearchItem.component';
import { SearchHeading, StyledSearch } from './Search.styles';

function Search() {
  return (
    <StyledSearch>
      <SearchHeading>Search Results</SearchHeading>
      <ListContainer columns={1}>
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </ListContainer>
    </StyledSearch>
  );
}

export default Search;
