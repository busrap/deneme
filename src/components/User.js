import React, { Component } from "react";
import PropTypes from 'prop-types'



//class base component
class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>İsim: {this.props.name} </li>
          <li>Departman: {this.props.departman}</li>
          <li>maaş: {this.props.maas}</li>
        </ul>
      </div>
    );
  }
}

User.propTypes ={
  name: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired,
  maas : PropTypes.string.isRequired
}
export default User;
