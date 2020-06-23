import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementHandler() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
  return (
    <div data-test="component-app">
      <button onClick={this.incrementHandler} data-test="increment-button">I am an increment button</button>
      <button onClick={this.decrementHandler} data-test="decrement-button">I am a decrement</button>
      <h2 data-test="counterDisplay">{this.state.counter}</h2>
    </div>
  );
}
}

export default App;
