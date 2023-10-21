import { styled } from 'styled-components';
import { CommonScrollbar } from '../../styles/GlobalStyles';

const StyledAppLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  ${CommonScrollbar}

  &::-webkit-scrollbar {
    width: 18px; /* width of the entire scrollbar */
  }

  overflow-y: scroll;

  flex: auto;

  display: flex;
  flex-direction: column;
`;

export { StyledAppLayout, Main };
