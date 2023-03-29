import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name || "Stranger"}!</p>
        <p>Your age is {this.props.age} years old</p>
      </div>
    );
  }
}
