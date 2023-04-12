import React, { Component } from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  
  render() {
    return (
      <div>        
        <UncontrolledLogin onLogin={this.onlogin} />
        
      </div>
    );
  }
}