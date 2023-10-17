import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Search from './pages/search/Search.page';
import Gym from './pages/gym/Gym.page';

import AppLayout from './ui/app-layout/AppLayout.component';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="search" />} />
            <Route path="search" element={<Search />} />
            <Route path="gym/:id" element={<Gym />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
