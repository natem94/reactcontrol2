import React from "react";

const UserDelete = ({ userId, onDelete }) => {
  return (
    <button onClick={() => onDelete(userId)}>Delete</button>
  );
};

export default UserDelete;
