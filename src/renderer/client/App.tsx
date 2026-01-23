import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './ui/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { PaginationContextProvider } from './contexts/PaginationContextProvider';
import { ItemTypes } from '@common/itemType';

const StyledOutlet = styled.div`
  background-color: var(--color-gray-900);
  color: var(--color-grey-200);
`;

const StyledContainer = styled.div`
  padding: 2rem;
`;

export default function App() {
  const queryClient = new QueryClient();

  window.electronAPI.populateDatabase(ItemTypes);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer className="w-full">
        <Header>
          <Link to={'/'}>MTF Inventory</Link>
        </Header>
        <PaginationContextProvider>
          <StyledOutlet>
            {/* <Button variation="secondary" onClick={window.electronAPI.delete}>
              Delete All
            </Button> */}
            <Outlet></Outlet>
          </StyledOutlet>
        </PaginationContextProvider>
      </StyledContainer>
      <Toaster
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          position: 'top-center',
          success: {
            duration: 1500,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '18px',
            maxWidth: '500px',
            padding: '12px 20px',
            backgroundColor: 'var(--color-grey-800)',
            color: 'var(--color-grey-200)',
            border: '3px solid var(--color-grey-700)',
          },
        }}
      ></Toaster>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
