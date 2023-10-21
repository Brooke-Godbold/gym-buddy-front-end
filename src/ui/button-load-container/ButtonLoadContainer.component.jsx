import { StyledPageLoadContainer } from '../page-load-container/PageLoadContainer.styles';
import { MiniSpinner } from '../spinner/Spinner.styles';

function ButtonLoadContainer() {
  return (
    <StyledPageLoadContainer>
      <MiniSpinner />
    </StyledPageLoadContainer>
  );
}

export default ButtonLoadContainer;
