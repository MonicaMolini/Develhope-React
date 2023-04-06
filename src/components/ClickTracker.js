import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = {
    lastButtonClick: "",
  };

  clickButton = (event) => {
    this.setState(() => {
      return { lastButtonClick: event.target.innerHTML };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Button #1</button>
        <button onClick={this.clickButton}>Button #2</button>
        <button onClick={this.clickButton}>Button #3</button>
        <h1>{this.state.lastButtonClick}</h1>
      </div>
    );
  }
}
