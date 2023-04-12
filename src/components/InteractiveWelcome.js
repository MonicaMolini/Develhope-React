import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState((prevState) => ({
      name: value,
    }));
  };
  render() {
    return (
      <div>
        <input name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="What's your name?"/>
        {this.state.name && <Welcome name={this.state.name}/>}
      </div>
    );
  }
}
