import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementBy };
      });
    }, this.props.timeout);
  }
  render() {
    return <CounterDisplay counterBy={this.state.count} />;
  }
}
