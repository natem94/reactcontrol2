import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={setFilter}
    />
  );
};

export default Filter;
