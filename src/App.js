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
      <button data-test="increment-button">I am a button</button>
      <h2 data-test="counterDisplay">I am the counter</h2>
    </div>
  );
}
}

export default App;
