import styled from 'styled-components';
import { CommonButton } from '../../styles/GlobalStyles';

const StyledUsefulnessSelection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1.8rem;
  row-gap: 1.2rem;

  font-size: 1.8rem;
`;

const UserCount = styled.p`
  grid-column: 1 / -1;
  text-align: start;

  font-size: 1.2rem;
`;

const UsefulnessSelect = styled.button`
  ${CommonButton}
  background-color: transparent;

  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: all;

  &:focus,
  &:active {
    outline: none;
  }

  & svg {
    transform: scale(125%);
  }
`;

export { StyledUsefulnessSelection, UserCount, UsefulnessSelect };
