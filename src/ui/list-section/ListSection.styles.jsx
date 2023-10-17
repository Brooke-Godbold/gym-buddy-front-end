import styled from 'styled-components';
import { CommonButton } from '../../styles/GlobalStyles';

const StyledListSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ListSectionHeader = styled.div`
  padding: 0 1.8rem;

  display: flex;
  justify-content: space-between;
`;

const ListSectionHeading = styled.h2``;

const ListSectionButton = styled.button`
  ${CommonButton}
`;

export {
  StyledListSection,
  ListSectionHeader,
  ListSectionHeading,
  ListSectionButton,
};
