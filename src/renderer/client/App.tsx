import { Outlet } from 'react-router-dom';

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

  return <Outlet></Outlet>;
}
