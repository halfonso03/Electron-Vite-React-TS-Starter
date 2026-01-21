import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './ui/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const StyledOutlet = styled.div`
  background-color: var(--color-gray-900);
  color: var(--color-grey-200);
`;

const StyledContainer = styled.div`
  padding: 2rem;
`;

export default function App() {
  const queryClient = new QueryClient();

  window.electronAPI.delete();

  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer className="w-full">
        <Header>
          <Link to={'/'}>MTF Inventory</Link>
        </Header>
        <StyledOutlet>
          <Outlet></Outlet>
        </StyledOutlet>
      </StyledContainer>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
