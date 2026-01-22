import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './ui/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Button from './ui/Button';

const StyledOutlet = styled.div`
  background-color: var(--color-gray-900);
  color: var(--color-grey-200);
`;

const StyledContainer = styled.div`
  padding: 2rem;
`;

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer className="w-full">
        <Header>
          <Link to={'/'}>MTF Inventory</Link>
        </Header>
        <StyledOutlet>
          <Button variation="secondary" onClick={window.electronAPI.delete}>
            Delete All
          </Button>
          <Outlet></Outlet>
        </StyledOutlet>
      </StyledContainer>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          position: 'bottom-right',
          success: {
            duration: 2000,
          },

          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '12px 20px',
            backgroundColor: 'var(--color-grey-800)',
            color: 'var(--color-grey-200)',
            border: '1px solid var(--color-grey-700)',
          },
        }}
      ></Toaster>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
