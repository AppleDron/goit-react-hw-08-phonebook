import React from 'react';
import { useSelector } from 'react-redux';
import { UserName } from './User.styled';

const User = () => {
  const name = useSelector(state => state.auth.user.name);
  const email = useSelector(state => state.auth.user.email);

  return (
    <div>
          <UserName>{name}</UserName>
          <UserName>{ email}</UserName>
    </div>
  );
};

export default User;
