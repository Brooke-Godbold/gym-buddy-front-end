import { BsHandThumbsUpFill } from 'react-icons/bs';

import {
  StyledUsefulnessSelection,
  UsefulnessSelect,
  UserCount,
} from './UsefulnessSelection.styles';

//BsHandThumbsUp

function UsefulnessSelection() {
  return (
    <StyledUsefulnessSelection>
      <p>You found this useful</p>
      <UsefulnessSelect>
        <BsHandThumbsUpFill />
      </UsefulnessSelect>
      <UserCount>15 users found this useful</UserCount>
    </StyledUsefulnessSelection>
  );
}

export default UsefulnessSelection;
