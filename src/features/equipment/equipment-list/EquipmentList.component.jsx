import { useParams } from 'react-router-dom';

import { useGetGymById } from '../../../query/gym/useGetGymById';
import { useIsAuthenticated } from '../../../query/auth/useIsAuthenticated';

import ListContainer from '../../../ui/list-container/ListContainer.component';
import EquipmentSummary from '../equipment-summary/EquipmentSummary.component';
import Modal from '../../../ui/modal/Modal.component';
import AddEquipmentForm from '../add-equipment-form/AddEquipmentForm.component';

import {
  ListSectionButton,
  ListSectionHeader,
  ListSectionHeading,
  StyledListSection,
} from '../../../ui/list-section/ListSection.styles';
import { NoItemsHeading } from '../../../ui/list-container/ListContainer.styles';

function EquipmentList() {
  const { id } = useParams();

  const { gymData } = useGetGymById(id);
  const { authData } = useIsAuthenticated();

  return (
    <StyledListSection>
      <ListSectionHeader>
        <ListSectionHeading>Equipment</ListSectionHeading>

        {authData?.isAuthenticated && (
          <Modal>
            <Modal.Open opens="addEquipment">
              <ListSectionButton>Add Equipment</ListSectionButton>
            </Modal.Open>
            <Modal.Window name="addEquipment">
              <AddEquipmentForm />
            </Modal.Window>
          </Modal>
        )}
      </ListSectionHeader>

      <ListContainer columns={gymData.equipment.length > 0 ? 2 : 1}>
        {gymData.equipment.length > 0 ? (
          gymData.equipment.map((equipmentItem) => (
            <EquipmentSummary
              equipment={equipmentItem}
              key={equipmentItem.equipmentId}
            />
          ))
        ) : (
          <NoItemsHeading>No Equipment submitted yet</NoItemsHeading>
        )}
      </ListContainer>
    </StyledListSection>
  );
}

export default EquipmentList;
