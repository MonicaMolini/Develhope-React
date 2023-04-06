import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export default class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.increment };
      });
    }, this.props.timeout);
  }

  render() {
    return <CounterDisplay counterBy={this.state.count} />;
  }
}

