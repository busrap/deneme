import React, { Component } from "react";

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
export default User;
