import styled from 'styled-components';
import { BaseItem } from '../../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const StyledGymDetails = styled(NavLink)`
  ${BaseItem}

  width: 100%;
  padding: 2.4rem;

  box-shadow: var(--shadow-md);

  display: grid;
  grid-template-columns: fit-content(25%) auto;
  column-gap: 6.4rem;

  min-width: 75rem;
  min-height: 30rem;

  max-height: 40rem;
  cursor: ${(props) => (props.$nav ? 'pointer' : 'auto')};

  & div {
    pointer-events: none;
  }

  @media (max-width: 80em) {
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 40em) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 40em) {
    padding: 1.2rem;
  }
`;

const GymDetailsImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  max-height: 90%;
  max-width: auto;

  align-self: center;

  border-radius: var(--border-radius-sm);
  overflow: hidden;

  @media (max-width: 75em) {
    max-height: 30rem;
    max-width: 30rem;
  }

  @media (max-width: 65em) {
    max-height: 20rem;
    max-width: 20rem;
  }

  @media (max-width: 40em) {
    display: none;
  }
`;

const GymDetailsImage = styled.img`
  height: 100%;

  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const DetailsBlock = styled.div`
  padding: 1.2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const AddressBlock = styled.div`
  color: var(--color-brand-600);
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;

  & p {
    @media (max-width: 30em) {
      font-size: 1.2rem;
    }
  }
`;

const GymName = styled.h1`
  @media (max-width: 30em) {
    font-size: 2.4rem;
  }
`;

export {
  StyledGymDetails,
  GymDetailsImageContainer,
  GymDetailsImage,
  DetailsBlock,
  AddressBlock,
  GymName,
};
