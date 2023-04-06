import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Hello from "./Hello";
import ClickTracker from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <InteractiveWelcome />            
        <ClickCounter />        
        <ClickTracker />
      </div>
    );
  }
}