import React, { Component } from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";

export default class App extends Component {
   render() {
    return (
      <div>        
        <TodoList/>
        
      </div>
    );
  }
}