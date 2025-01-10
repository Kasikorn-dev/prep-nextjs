// pages/users/index.tsx
import { useRouter } from 'next/router';
import { useUsers } from '../../hooks/useUsers';
import { Button, List, ListItem, CircularProgress } from '@mui/material';

export default function UserList() {
  const { data: users, isLoading } = useUsers();
  const router = useRouter();

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <h1>Users</h1>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push('/users/new')}
      >
        Add User
      </Button>
    </div>
  );
}
