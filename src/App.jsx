import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles';

import Search from './pages/search/Search.page';
import Gym from './pages/gym/Gym.page';
import NotFound from './pages/not-found/NotFound.page';

import AppLayout from './ui/app-layout/AppLayout.component';
import AuthComplete from './pages/auth-complete/AuthComplete.component';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(
        `Oops! Looks like something went wrong: '${error}!' Sorry about that!`
      );
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          error: {
            duration: 10000,
          },
        }}
      />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="search" />} />
            <Route path="search" element={<Search />} />
            <Route path="gym/:id" element={<Gym />} />
            <Route path="auth/complete" element={<AuthComplete />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
