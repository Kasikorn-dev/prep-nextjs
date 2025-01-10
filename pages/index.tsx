import TestUserContext from '@/components/TestUserContext';
import TestUseReducer from '@/components/TestUseReducer';
import { UserList } from '@/components/UserList';
import { UserSummary } from '@/components/UserSummary';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/users">users</Link>
        </li>
        <li>
          <Link href="/users/new">new user</Link>
        </li>
      </ul>

      <UserList />
      <UserSummary />
      <TestUseReducer />
      <TestUserContext />
    </div>
  );
}
