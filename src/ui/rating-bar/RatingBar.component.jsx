import PropTypes from 'prop-types';

import { useState } from 'react';

import { PiBarbellFill, PiBarbellLight } from 'react-icons/pi';

import {
  RatingBarIcons,
  RatingBarText,
  RatingIconContainer,
  StyledRatingBar,
} from './RatingBar.styles';

function RatingBar({
  canEdit = false,
  avgRating,
  userRating,
  register,
  setValue,
}) {
  const [ratingBuffer, setRatingBuffer] = useState(null);

  function handleMouseEnter(rating) {
    if (!canEdit) return;

    setRatingBuffer(rating);
  }

  function handleMouseLeave() {
    if (!canEdit) return;

    setRatingBuffer(null);
  }

  function handleSetRating(e, rating) {
    e.preventDefault();

    if (!canEdit) return;

    setValue?.('rating', rating);
  }

  const roundedRating = Math.round(avgRating);

  return (
    <StyledRatingBar $canEdit={canEdit}>
      <RatingBarIcons>
        {[...Array(10)].map((e, i) => (
          <RatingIconContainer
            id="rating"
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onMouseLeave={() => handleMouseLeave(null)}
            onClick={(e) => handleSetRating(e, i + 1)}
            $canEdit={canEdit}
            {...register?.('rating', {
              required: {
                value: true,
                message: 'You must specify a rating',
              },
            })}
            key={i}
          >
            {roundedRating ? (
              roundedRating > i ? (
                <PiBarbellFill />
              ) : (
                <PiBarbellLight />
              )
            ) : ratingBuffer ? (
              ratingBuffer > i ? (
                <PiBarbellFill />
              ) : (
                <PiBarbellLight />
              )
            ) : userRating ? (
              userRating > i ? (
                <PiBarbellFill />
              ) : (
                <PiBarbellLight />
              )
            ) : (
              <PiBarbellLight />
            )}
          </RatingIconContainer>
        ))}
      </RatingBarIcons>
      {avgRating && (
        <RatingBarText>{`(Average Rating: ${roundedRating} / 10)`}</RatingBarText>
      )}
    </StyledRatingBar>
  );
}

RatingBar.propTypes = {
  canEdit: PropTypes.bool,
  avgRating: PropTypes.number,
  userRating: PropTypes.number,
  register: PropTypes.func,
  setValue: PropTypes.func,
};

export default RatingBar;
