import AddGymForm from '../../features/gyms/add-gym-form/AddGymForm.component';
import Modal from '../modal/Modal.component';

import { NavBarButton } from '../nav-bar/NavBar.styles';
import { StyledNavBarMenu } from './NavBarMenu.styles';

function NavBarMenu() {
  return (
    <StyledNavBarMenu>
      <NavBarButton>My Workout</NavBarButton>
      <NavBarButton>Account</NavBarButton>

      <Modal>
        <Modal.Open opens="addGym">
          <NavBarButton>Add a Gym</NavBarButton>
        </Modal.Open>
        <Modal.Window name="addGym">
          <AddGymForm />
        </Modal.Window>
      </Modal>
    </StyledNavBarMenu>
  );
}

export default NavBarMenu;
