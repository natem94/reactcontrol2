import React, { useState } from "react";
import { getUsers, deleteUser } from "./apiMethods";
import UserList from "./components/UserList";
import Filter from "./components/Filter";
import GetUsersButton from "./components/GetUsersButton";
import "./styles.css";

const App = () => {
  const [state, setState] = useState({
    users: [],
    filter: ""
  });

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      setState((prevState) => ({
        ...prevState,
        users: response.data.data,
      }));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setState((prevState) => ({
        ...prevState,
        users: prevState.users.filter((user) => user.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      filter: value,
    }));
  };

  const filteredUsers = state.users.filter((user) =>
    user.first_name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <GetUsersButton onClick={handleGetUsers} />
      <Filter filter={state.filter} setFilter={handleFilterChange} />
      <UserList users={filteredUsers} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
