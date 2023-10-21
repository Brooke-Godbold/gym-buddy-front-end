import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { useCallback, useEffect } from 'react';

import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';
import { useGetAuthenticatedUser } from '../../../query/user/useGetAuthenticatedUser';
import { useVoteEquipment } from '../../../query/gym/useVoteEquipment';
import { useRateEquipment } from '../../../query/gym/useRateEquipment';

import UsefulnessSelection from '../../../ui/usefulness-selection/UsefulnessSelection.component';
import RatingBar from '../../../ui/rating-bar/RatingBar.component';

import {
  EquipmentSummaryHeading,
  EquipmentSummaryQualityContainer,
  EquipmentUsefulnessContainer,
  StyledEquipmentSummary,
} from './EquipmentSummary.styles';

function EquipmentSummary({ equipment }) {
  const { authData } = useIsAuthenticated();
  const { userData } = useGetAuthenticatedUser(authData?.isAuthenticated);
  const { isVotingEquipment, voteEquipment } = useVoteEquipment();
  const { isRatingEquipment, rateEquipment } = useRateEquipment();

  const { register, setValue, watch } = useForm({
    mode: 'onTouched',
  });

  const userVote = () =>
    equipment.accuracy.find(
      (accuracyData) => accuracyData.userId === userData?.userId
    );

  function avgQuality() {
    const totalQuality = equipment.quality.reduce(
      (acc, cur) => acc + cur.rating,
      0
    );
    return totalQuality / equipment.quality.length;
  }

  const handleUpdateQuality = useCallback(
    (rating) => {
      const data = {
        equipmentId: equipment.equipmentId,
        qualityData: {
          userId: 1,
          rating,
        },
      };

      rateEquipment(data);
    },
    [equipment, rateEquipment]
  );

  function handleVoteEquipment() {
    const data = {
      equipmentId: equipment.equipmentId,
      accuracyData: {
        userId: userData?.userId,
        isCorrect: userVote() ? !userVote()?.isCorrect : true,
      },
    };

    voteEquipment(data);
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'rating') handleUpdateQuality(value.rating);
    });
    return () => subscription.unsubscribe();
  }, [watch, handleUpdateQuality]);

  return (
    <StyledEquipmentSummary
      $ownedReview={equipment.userId === userData?.userId}
    >
      <EquipmentSummaryHeading>{equipment.name}</EquipmentSummaryHeading>
      <EquipmentSummaryQualityContainer>
        <h4>Average Quality Rating</h4>
        <RatingBar canEdit={false} avgRating={avgQuality() || 0} />
      </EquipmentSummaryQualityContainer>
      {authData?.isAuthenticated && (
        <EquipmentSummaryQualityContainer>
          <h4>Your Vote</h4>
          <RatingBar
            canEdit={!isRatingEquipment}
            register={register}
            setValue={setValue}
            userRating={
              equipment.quality.find((q) => q.userId === userData?.userId)
                ?.rating
            }
          />
        </EquipmentSummaryQualityContainer>
      )}
      {authData?.isAuthenticated && (
        <EquipmentUsefulnessContainer>
          <UsefulnessSelection
            votes={equipment.accuracy.filter((vote) => vote.isCorrect)}
            voteAction={handleVoteEquipment}
            canVote={!isVotingEquipment}
            active={userVote()?.isCorrect || false}
            userOwned={userData?.userId == equipment.userId}
          />
        </EquipmentUsefulnessContainer>
      )}
    </StyledEquipmentSummary>
  );
}

EquipmentSummary.propTypes = {
  equipment: PropTypes.object.isRequired,
};

export default EquipmentSummary;
