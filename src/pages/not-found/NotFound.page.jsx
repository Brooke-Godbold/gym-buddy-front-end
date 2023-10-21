import PageErrorContainer from '../../ui/page-error-container/PageErrorContainer.component';
import { StyledNotFound } from './NotFound.styles';

function NotFound() {
  const error = {
    heading: '404',
    text: `Looks like that page doesn't exist!`,
  };

  return (
    <StyledNotFound>
      <PageErrorContainer error={error}></PageErrorContainer>
    </StyledNotFound>
  );
}

export default NotFound;
