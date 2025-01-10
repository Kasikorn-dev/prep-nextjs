import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/features/counterSlice';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value); // ดึง state
  const dispatch = useDispatch(); // ใช้ dispatch action

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
