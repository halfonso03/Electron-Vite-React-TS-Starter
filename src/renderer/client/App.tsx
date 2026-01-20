import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './ui/Header';

const StyledOutlet = styled.div`
  background-color: var(--color-gray-900);
  color: var(--color-grey-200);
`;

const StyledContainer = styled.div`
  padding: 2rem;
`;

export default function App() {
  // const handleFetchUser = async () => {
  //   setError(null);
  //   try {
  //     // Calling the bridge function from window.electronAPI
  //     const response: ApiResponse<UserData> =
  //       await window.electronAPI.getUser(1);
  //     if (response.success && response.data) {
  //       setUser(response.data);
  //     } else {
  //       setError(response.error || 'Failed to fetch user');
  //     }
  //   } catch (err) {
  //     setError('System error: ' + (err as Error).message);
  //   }
  // };

  return (
    <>
      <StyledContainer className="w-full">
        <Header>
          <Link to={'/'}>MTF Inventory</Link>
        </Header>
        <StyledOutlet>
          <Outlet></Outlet>
        </StyledOutlet>
      </StyledContainer>
    </>
  );
}
