import React, { Component } from "react";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      content: this.props.content
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ ...props });
  }
  render() {
    return (
      <div
        id={this.state.id}
        className="btn"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Btn;