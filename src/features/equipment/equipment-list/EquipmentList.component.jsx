import ListContainer from '../../../ui/list-container/ListContainer.component';
import EquipmentSummary from '../equipment-summary/EquipmentSummary.component';

import {
  ListSectionButton,
  ListSectionHeader,
  ListSectionHeading,
  StyledListSection,
} from '../../../ui/list-section/ListSection.styles';

function EquipmentList() {
  return (
    <StyledListSection>
      <ListSectionHeader>
        <ListSectionHeading>Equipment</ListSectionHeading>
        <ListSectionButton>Add Equipment</ListSectionButton>
      </ListSectionHeader>

      <ListContainer>
        <EquipmentSummary />
        <EquipmentSummary />
        <EquipmentSummary />
        <EquipmentSummary />
        <EquipmentSummary />
        <EquipmentSummary />
        <EquipmentSummary />
      </ListContainer>
    </StyledListSection>
  );
}

export default EquipmentList;
