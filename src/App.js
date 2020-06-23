import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    }

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    if(this.state.error) {
      this.setState({ error: false});
    }
      this.setState({ counter: this.state.counter + 1 });
  }

  decrementHandler() {
    if(this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    const errorClass = this.state.error ? '' : 'hidden';
  return (
    <div data-test="component-app">
      <div data-test="error-message" className={`error ${errorClass}`}>
        The counter cannot go below 0
      </div>
      <button onClick={this.incrementHandler} data-test="increment-button">Increment  +</button>
      <button onClick={this.decrementHandler} data-test="decrement-button">Decrement  -</button>
      <h2 data-test="counterDisplay">{this.state.counter}</h2>
    </div>
  );
}
}

export default App;
