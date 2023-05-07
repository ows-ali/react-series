import React, { Component } from "react";

export default class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Khan",
    };
  }
  render() {
    return (
      <div>
        <h1>Class component: {this.state.name}</h1>
        ClassComponentExample
      </div>
    );
  }
}
