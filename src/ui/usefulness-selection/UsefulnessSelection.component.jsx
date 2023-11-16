import PropTypes from 'prop-types';

import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';

import { useIsAuthenticated } from '../../query/auth/useIsAuthenticated';

import {
  StyledUsefulnessSelection,
  UsefulnessSelect,
  UsefulnessText,
  UserCount,
} from './UsefulnessSelection.styles';

function UsefulnessSelection({
  votes,
  voteAction,
  canVote,
  active,
  userOwned,
}) {
  const { authData } = useIsAuthenticated();

  return (
    <StyledUsefulnessSelection>
      {!userOwned && authData?.isAuthenticated && (
        <>
          <UsefulnessText>
            {active ? 'You found this useful' : 'Did you find this useful?'}
          </UsefulnessText>
          <UsefulnessSelect disabled={!canVote} onClick={voteAction}>
            {active ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}
          </UsefulnessSelect>
        </>
      )}

      {votes?.length > 0 && (
        <UserCount>{`${votes.length} users found this useful`}</UserCount>
      )}
    </StyledUsefulnessSelection>
  );
}

UsefulnessSelection.propTypes = {
  votes: PropTypes.array.isRequired,
  voteAction: PropTypes.func.isRequired,
  canVote: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  userOwned: PropTypes.bool.isRequired,
};

export default UsefulnessSelection;
