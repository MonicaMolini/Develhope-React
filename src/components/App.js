import React from "react";
import { Counter } from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name ="John" age={29}/>
        <Counter initialValue={0} incrementBy={4} timeout={2000} />

      </div>
    );
  }
}