import { createContext, useContext, useReducer, ReactNode } from 'react';

type users = {
  users: { name: string }[];
};

type TAction = {
  type: 'ADD' | 'CREATE' | 'DELETE' | 'UPDATE';
  payload: any;
};

const initialSate: users = { users: [] };
const reducerFn = (state: users, action: TAction) => {
  switch (action.type) {
    case 'ADD':
      return { users: [...state.users, action.payload] };
    default:
      throw new Error('Unknown action');
  }
};

export const UserContext = createContext(initialSate);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerFn, initialSate);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
