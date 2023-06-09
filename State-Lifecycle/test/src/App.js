import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
    this.resetNewNumber = this.resetNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  resetNewNumber() {
    this.setState({ data: this.state.data - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <button onClick={this.resetNewNumber}>Decrement</button>

        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("Component Will Mount.");
  }
  componentDidMount() {
    console.log("Component Did Mount.");
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("Component Will Receive Props.");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update.");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update.");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount.");
  }

  render() {
    return (
      <div>
        <h2>{this.props.myNumber}</h2>
      </div>
    );
  }
}

export default App;
