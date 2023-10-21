import styled from 'styled-components';
import { CommonScrollbar } from '../../styles/GlobalStyles';

const StyledListContainer = styled.div`
  ${CommonScrollbar}

  width: 100%;
  max-height: 75rem;

  overflow-y: scroll;
  overflow-x: hidden;

  border-top: solid 2px var(--color-grey-100);
  border-bottom: solid 2px var(--color-grey-100);

  border-radius: var(--border-radius-sm);
  padding: 1.2rem;

  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr)`};
  gap: 1.2rem;

  @media (max-width: 50em) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 30em) {
    padding: 1.2rem 0;
  }
`;

const NoItemsHeading = styled.h3`
  text-align: center;
`;

export { StyledListContainer, NoItemsHeading };
