import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../store/action-creator/user';

export const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
