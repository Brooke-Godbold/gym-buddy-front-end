import { Spinner } from '../spinner/Spinner.styles';
import { StyledPageLoadContainer } from './PageLoadContainer.styles';

function PageLoadContainer() {
  return (
    <StyledPageLoadContainer>
      <Spinner />
    </StyledPageLoadContainer>
  );
}

export default PageLoadContainer;
