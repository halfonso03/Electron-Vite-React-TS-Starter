import { ApiResponse, UserData } from '@common/types';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchUser = async () => {
    setError(null);
    try {
      // Calling the bridge function from window.electronAPI
      const response: ApiResponse<UserData> =
        await window.electronAPI.getUser(1);
      console.log('here2');
      if (response.success && response.data) {
        setUser(response.data);
      } else {
        setError(response.error || 'Failed to fetch user');
      }
    } catch (err) {
      setError('System error: ' + (err as Error).message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Dashboard</h1>
      <button onClick={handleFetchUser}>Load User Info</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user ? (
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>No user data loaded yet.</p>
      )}
    </div>
  );
}
