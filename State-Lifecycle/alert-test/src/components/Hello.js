import React, { Component } from "react";

class Hello extends Component {
  componentWillUnmount() {
    alert("The component has unmounted!");
  }

  render() {
    return <h1>Hello World</h1>;
  }
}
export default Hello;
