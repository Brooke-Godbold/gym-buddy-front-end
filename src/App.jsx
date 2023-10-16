import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/home/Home.page';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
