import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export function UserList() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log('UserList');

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => refetch()}>Refetch User List</button>
    </div>
  );
}
