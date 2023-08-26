import React, { Component } from "react";
import { UserContext } from "./App";

export default class UserClassComponent extends Component {
  render() {
    return (
    <UserContext.Consumer>
        {(user) => <div style={{ padding: "20px" }}>
        <h4>User Page Class Component</h4>
        <p>name: {user.name}</p>
        <p>city: {user.city}</p>
      </div>}
    </UserContext.Consumer>
      
    );
  }
}
