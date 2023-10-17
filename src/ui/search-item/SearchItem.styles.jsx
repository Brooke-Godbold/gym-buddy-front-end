import styled from 'styled-components';
import { BaseItem } from '../../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

const StyledSearchItem = styled(NavLink)`
  ${BaseItem}

  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export { StyledSearchItem };
