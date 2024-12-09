import React from "react";
import UserDelete from "./UserDelete";

const User = ({ user, onDelete }) => {
  return (
    <div>
      <p>{user.first_name} {user.last_name}</p>
      <UserDelete userId={user.id} onDelete={onDelete} />
    </div>
  );
};

export default User;
