import React from "react";

export default class ClickCounter extends React.Component {
  state = { count: 0 };
  handleButton = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleButton}>Increment</button>        
      </div>
    );
  }
  
}
