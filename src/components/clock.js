import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timerId);
  }

  render() {
    const welcomeMessage = (
      <p>Hello, the time is {this.state.date.toLocaleTimeString()}.</p>
    );
    return welcomeMessage;
  }
}

export default Clock;
