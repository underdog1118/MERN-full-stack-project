import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jonathan",
      image:
        "https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png",
      place: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
