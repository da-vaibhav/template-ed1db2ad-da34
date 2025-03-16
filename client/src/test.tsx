import { useQuery } from '@tanstack/react-query';

export const TestPage = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['test'],
    queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then(res => res.json())
      .catch(err => {
        console.error("Error fetching data:", err);
        throw err; // Rethrow the error to be caught by react-query
      }),
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred: {error.message}</div>
  if (!data) return <div>No data</div>

  return (
    <div>
    </div>
  );
}
