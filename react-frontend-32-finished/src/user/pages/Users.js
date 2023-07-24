import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jonathan Qiu',
      image:
        'https://media.licdn.com/dms/image/D5635AQHvL58pYsW5lg/profile-framedphoto-shrink_400_400/0/1690082413835?e=1690797600&v=beta&t=T5lDwYzGgP4zFQMEHiH3Y1msIhC1RdQjRJEEMzHOpuE',
      places: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
