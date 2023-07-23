import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jonathan Qiu',
      image:
        'https://media.licdn.com/dms/image/D5635AQHvL58pYsW5lg/profile-framedphoto-shrink_400_400/0/1690082413835?e=1690689600&v=beta&t=1mgXC2JcoYR06rRdBU8AufVwqjTWuI-9X3PRKC1rebQ',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
