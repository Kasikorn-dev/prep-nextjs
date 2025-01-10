import TestUser from '@/components/TestUser';
import TestUserContext from '@/components/TestUserContext';
import TestUseReducer from '@/components/TestUseReducer';
import { UserList } from '@/components/UserList';
import { UserSummary } from '@/components/UserSummary';
import { UserProvider } from '@/hooks/Provider';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Counter from '@/components/Counter';

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
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
      <UserProvider>
        <TestUser />
      </UserProvider>

      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
