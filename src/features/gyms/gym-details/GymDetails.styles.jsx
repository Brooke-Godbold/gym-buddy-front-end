import styled from 'styled-components';
import { BaseItem } from '../../../styles/GlobalStyles';

const StyledGymDetails = styled.div`
  ${BaseItem}

  width: 100%;
  padding: 2.4rem;

  box-shadow: var(--shadow-md);

  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 6.4rem;

  min-height: 40rem;
`;

const GymDetailsImageContainer = styled.div`
  max-height: 40rem;
  max-width: 40rem;

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
`;

export {
  StyledGymDetails,
  GymDetailsImageContainer,
  GymDetailsImage,
  DetailsBlock,
  AddressBlock,
};
