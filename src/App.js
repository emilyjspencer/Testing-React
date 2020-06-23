import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
  return (
    <div data-test="component-app">
      <h1>App</h1>
      <button onClick={() => this.setState({ counter: this.state.counter + 1})} data-test="increment-button">I am an increment button</button>
      <button onClick={() => this.setState({ counter: this.state.counter - 1})} data-test="decrement-button">I am a decrement button</button>
      <h2 data-test="counterDisplay">{this.state.counter}</h2>
    </div>
  );
}

  }

export default App;
