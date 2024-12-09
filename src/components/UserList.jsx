import React from "react";
import User from "./User";

const UserList = ({ users, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
