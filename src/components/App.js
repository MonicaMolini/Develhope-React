import React, { Component } from "react";
import { Login } from "./Login";

export default class App extends Component {
   onLogin = (state) => {
    console.log(state);
  };
  
  render() {
    return (
      <div>        
        <Login onLogin={this.onlogin}></Login>
        
      </div>
    );
  }
}
