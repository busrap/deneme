import React, { Component } from "react";

// function component
const Navbar = (
  props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.name}</h3>
      <h3>{props.surname}</h3>
      <h2>{props.age}</h2>
      
    </div>
  );
}
export default Navbar;
