import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export function UserSummary() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log('UserSummary');

  return (
    <div>
      <h1>User Summary</h1>
      {isLoading ? <p>Loading...</p> : <p>Total Users: {data.length}</p>}
    </div>
  );
}
