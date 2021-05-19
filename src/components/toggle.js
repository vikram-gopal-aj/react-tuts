import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    const buttonText = this.state.isToggleOn ? "Laser On" : "Laser Off";
    return <button onClick={this.handleToggle}>{buttonText}</button>;
  }
}

export default Button;
