import PropTypes from 'prop-types';

import {
  PageErrorHeading,
  PageErrorText,
  StyledPageErrorContainer,
} from './PageErrorContainer.styles';

function PageErrorContainer({ error }) {
  return (
    <StyledPageErrorContainer>
      <PageErrorHeading>{error.heading}</PageErrorHeading>
      <PageErrorText>{error.text}</PageErrorText>
    </StyledPageErrorContainer>
  );
}

PageErrorContainer.propTypes = {
  error: PropTypes.object.isRequired,
};

export default PageErrorContainer;
