import React, { useReducer } from 'react';

type TinitialState = {
  count: number;
};
type TAction = {
  type: 'increment' | 'decrement';
};

const initialState: TinitialState = { count: 0 };

function reducer(state: TinitialState, action: TAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

export const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default TestUseReducer;
