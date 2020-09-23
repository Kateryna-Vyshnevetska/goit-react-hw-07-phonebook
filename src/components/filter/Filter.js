import React from "react";

const Filter = ({ getNamesByFilter }) => {
  return (
    <>
      <h3 className="title">Find contacts by name</h3>
      <input
        className="input"
        onChange={getNamesByFilter}
        type="text"
        name="filter"
        placeholder="Enter name"
      ></input>
    </>
  );
};
export default Filter;
