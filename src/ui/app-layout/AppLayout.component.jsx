import { Outlet } from 'react-router-dom';

import { Main, StyledAppLayout } from './AppLayout.styles';
import NavBar from '../nav-bar/NavBar.component';
import Footer from '../footer/Footer.component';

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <Outlet />
        <Footer />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
