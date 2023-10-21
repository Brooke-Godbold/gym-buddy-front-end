import styled from 'styled-components';
import { CommonScrollbar } from '../../../styles/GlobalStyles';

const StyledNearbyGymsSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey-100);

  padding: 4.8rem;

  @media (max-width: 40em) {
    padding: 4.8rem 1.2rem;
  }
`;

const NearbyGymsList = styled.div`
  ${CommonScrollbar}

  padding: 2.4rem;

  display: flex;
  gap: 2.4rem;

  max-width: 75%;

  overflow-x: scroll;

  @media (max-width: 120em) {
    max-width: 100%;
  }

  @media (max-width: 80em) {
    flex-direction: column;
  }

  @media (max-width: 40em) {
    padding: 1.2rem;
  }
`;

export { StyledNearbyGymsSection, NearbyGymsList };
