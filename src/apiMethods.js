import axios from "axios";

const baseUrl = "https://reqres.in/api";

export const getUsers = () => {
  return axios.get(`${baseUrl}/users`);
};

export const deleteUser = (id) => {
  return axios.delete(`${baseUrl}/users/${id}`);
};
