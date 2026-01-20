import { asyncFn } from '@common/types';
import { useState, useEffect } from 'react';



// Define a generic type so this works with any API response
function useFetchDb<T>(asyncFn: asyncFn<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await asyncFn();
        const result = await response.data ?? null;
        setData(result);
        setError(null);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => controller.abort();
  }, [asyncFn]);

  return { data, loading, error };
}

export default useFetchDb;