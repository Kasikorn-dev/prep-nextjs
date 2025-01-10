import React, { useRef } from 'react';
import { useUser } from '../hooks/Provider';
import { useFormik } from 'formik';

const TestUser = () => {
  const { state, dispatch } = useUser();
  const nameRef = useRef(undefined);
  console.count();
  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: () => {
      dispatch({ type: 'ADD', payload: { name: nameRef.current.value } });
    },
  });
  return (
    <div>
      {state?.users.map((user, idx) => (
        <h1 key={idx}>{user.name}</h1>
      ))}
      <form onSubmit={formik.handleSubmit}>
        <input name="name" ref={nameRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TestUser;
