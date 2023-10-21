import { useSearchParams } from 'react-router-dom';

import { useGetGyms } from '../../query/gym/useGetGyms';

import ListContainer from '../../ui/list-container/ListContainer.component';
import GymDetails from '../../features/gyms/gym-details/GymDetails.component';
import PageLoadContainer from '../../ui/page-load-container/PageLoadContainer.component';
import PageErrorContainer from '../../ui/page-error-container/PageErrorContainer.component';
import SearchSection from '../../features/home/search-section/SearchSection.component';

import {
  SearchHeading,
  SearchResultsContainer,
  StyledSearch,
} from './Search.styles';
import RecentReviewsSection from '../../features/home/recent-reviews-section/RecentReviewsSection.component';
import NearbyGymsSection from '../../features/home/nearby-gyms-section/NearbyGymsSection.component';

function Search() {
  const [searchParams] = useSearchParams();

  const { isFetchingGyms, gymsData } = useGetGyms(searchParams.get('gym'));

  const noResultsError = {
    heading: 'No Results Found',
    text: `Looks like nothing was found for that search!`,
  };

  return (
    <StyledSearch>
      {!searchParams.get('gym') ? (
        <>
          <SearchSection />
          <NearbyGymsSection />
          <RecentReviewsSection />
        </>
      ) : (
        <SearchResultsContainer>
          <SearchHeading>Search Results</SearchHeading>
          <ListContainer columns={1}>
            {isFetchingGyms ? (
              <PageLoadContainer />
            ) : !gymsData?.length > 0 ? (
              <PageErrorContainer error={noResultsError} />
            ) : (
              gymsData.map((gym) => (
                <GymDetails key={gym.gymId} gymData={gym} />
              ))
            )}
          </ListContainer>
        </SearchResultsContainer>
      )}
    </StyledSearch>
  );
}

export default Search;
