import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import ClickTracker from "./ClickTracker";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={30} />               
        <ClickCounter />        
        <ClickTracker />
      </div>
    );
  }
}