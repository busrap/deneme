import React, { Component } from "react";
import PropTypes from "prop-types";

// function component
const Navbar = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.name}</h3>
      <h3>{props.surname}</h3>
      <h2>{props.age}</h2>
    </div>
  );
};
//Navbar başka bir alanda kullanılacağı zaman propTypes'ı string olan bir title adında bir prop göndermek zorundayız
//Bu alan 3. puhs da görüntülenecek olan alan
Navbar.propTypes = {
  title : PropTypes.string.isRequired
};

Navbar.defaultProps ={
  title : "default props"
}
export default Navbar;
