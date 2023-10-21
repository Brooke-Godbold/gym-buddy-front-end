import PropTypes from 'prop-types';

import { CurrentTextCount, StyledTextCount } from './TextCount.styles';

function TextCount({ value, minLength, maxLength }) {
  return (
    <StyledTextCount>
      {minLength &&
        value?.length < minLength &&
        `At least ${minLength} characters required : `}
      {maxLength &&
        value?.length > maxLength &&
        `Less than ${maxLength} characters required : `}
      <CurrentTextCount
        $valid={
          (minLength ? value?.length >= minLength : true) &&
          (maxLength ? value?.length <= maxLength : true)
        }
      >
        {value?.length || 0}
      </CurrentTextCount>
      {maxLength ? ` / ${maxLength}` : ' characters'}
    </StyledTextCount>
  );
}

TextCount.propTypes = {
  value: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default TextCount;
