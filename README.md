# Testing React

# Jest and Jest Watch Mode

* Enter jest watch mode by running:
```html
npm test
```
* Exit jest watch mode by entering:
```html
q
```

* What is Jest watch mode?
Jest watch mode watches for changes and then reruns the tests based on any changes to the code
By default, watch mode only watches for changes since the last commit

* If we want to run all of our tests, we can run them even if there haven't been any changes since the last commit, by running 
```html
a
```

<hr>

**Jest tests**

By default, Jest looks for files in the src directory with the extension .test.js


Example test

App.test.js
```html
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react!!!/i);
  expect(linkElement).toBeInTheDocument();
});
```

App.js

```html
import React from 'react';
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <h1>learn react!!!</h1>
    </div>
  );
}

export default App;
```
This test passes.

By default, Create-React-App uses the React Testing Library 

Just as is the case with RSpec and Jasmine, an expect() method is used to make assertions.
The test() method is called, which has two arguments:
1 - the name of the test/description
2 - an anonymous function run by Jest. 
If any errors are thrown, the test will fail


## Enzyme

Enzyme isn't shipped with Create-React-App so it needs to be installed.
Three packages need to be installed:

```html
npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
```

Saved as dependencies for testing purposes and not production
Jest-enzyme - so Jest and Enzyme can talk to one another
enzyme-adapter-react-16 - or whichever version of React that a developer is using. Used to tell Enzyme what type of code to expect

<hr>

## What is Enzyme?

* Enzyme is a tool that creates a Virtual DOM, which is needed when testing React without a browser.

* Create-React-App uses REACT-DOM for this and so does Enzyme(under the hood)

* Enzyme's extensive toolkit allows developers to search through the DOM using jQuery-type and CSS-type selectors

* Events can also be simulated on the DOM

<hr>

## Setting up Enzyme

* The setup involves configuring Enzyme to use the adapter specified by the developer.

* The adapter tells Enzyme what type of code to expect
* The following code should be added to the test file:

```html
import Enzyme from ‘enzyme’;
import EnzymeAdapter from ‘enzyme-adapter-react-16’;
```

* Enzyme also needs to be configured with an object that specifies an adapter. This object is an instance of the Enzyme Adapter base class.
Thus, the following code also needs to be added to the test file:
```html

Enzyme.configure({ adapter: new EnzymeAdapter() });

```

Remove the test code and run npm test to check that the setup has been successful.

<hr>

## Using Enzyme in tests

### Shallow Rendering

The shallow function needs to be required i.e.
```html
import Enzyme, { shallow } from 'enzyme';
```

* Enzyme's shallow() function is used to render components

* shallow() takes JSX as an argument and returns a shallow wrapper. 

* When writing unit tests for React, shallow rendering can be helpful Shallow rendering allows developers to render elements that are only one level deep i.e.
for a given parent component with various child components, those child components won't be rendered.
*  Instead placeholders will take their place, and only the parent component will be rendered, therefore allowing for quicker testing.


<hr>


## Debugging with Enzyme

* debug can used to debug React applications

```html
test('renders correctly', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  
});
```

outputs the following in the command line:

```html
PASS  src/App.test.js
  ✓ renders correctly (4ms)

  console.log src/App.test.js:12
    <div className="App">
      <h1>
        Learning to test React!!!
      </h1>
    </div>
```

Allows us to get visibility because it returns the DOM as a string

<hr>

## Using assertions

```html
  test('it renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeFalsy();
});
```

This test fails

```html
test('it renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.toBeTruthy())=;
}
```

This test passes 

<hr>

## Removing data-test attributes from the production code

Install the following package

```html
npm install —save-dev babel-plugin-react-remove-properties
```
Run npm run eject:

```html
npm run eject
```
which takes the configuration files that had been hidden by Create-React-App and makes them configurable to the developer.
The package.json will now list all of the dependencies, not just the ones that the developer installed.

Update the babel cofiguraiton by copying the following to the 'babel' script in package.json:

```html
Add to the package.json - copy under the babel line


“babel”: {
  "env": {
    "production": {
      "plugins": [
        ["react-remove-properties", {"properties": ["data-test"]}
      ]
    }, “presents”:[
      “react-app”
  }
}
```
Create a production build:

```html
npm run build
```

Run a static server:
```html
npm install -g server or sudo npm install -g server
```

Run the command to serve the static app:

```html
serve -s build
```

Go to localhost:5000

<hr>

## DRYing up tests

Functions can be used to avoid duplication and repetition in tests, similar to the use of before hooks in rspec and beforeEach() functions in JavaScript.

```html
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}
``` 
This setup method can then replace some of the code in each test e.g.

```html
test('it renders without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
```

```html
const wrapper - setup();
```
instead of:
```html
const wrapper = shallow(<App />);
```

Another example of a function to DRY up test code:

```html
const findByTestAttribute = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
 }
``` 

Then the findByTestAttribute() function can be used to replace some code in each test - thereby avoiding unecessary duplication.
```html
const counterDisplay = findByTestAttribute(wrapper, 'counterDisplay');
```
instead of:
```html
const counterDisplay = wrapper.find("[data-test='counterDisplay']")
```

<hr>

**Side Note - JS Docs**

An example of a JS doc for the setup() function
 /** 
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props 
 * @param {any} state  - Initial state for setup
 * @returns {ShallowWrapper}
 */

JS docs explain what particular functions do and can be placed just above functions

<hr>

## Testing state

### Class-based components

The methods setState() and state() can be used to test state (for classical /class-based components)

App.js

```html
// code omitted for brevity

 render() {
  return (
    <div data-test="component-app">
      <h1>App</h1>
      <button onClick={() => this.setState({ counter: this.state.counter + 1})} data-test="increment-button">I am a button</button>
      <h2 data-test="counterDisplay">{this.state.counter}</h2>
    </div>
  );
```

App.test.js

```html

test('the counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
})

test('the counter display is incremented by 1 on each button click', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttribute(wrapper, 'increment-button'); // used to find the button
  button.simulate('click'); // used to simulate a button click
  const counterDisplay = findByTestAttribute(wrapper, 'counterDisplay'); // used to find the counterDisplay
  expect(counterDisplay.text()).toContain(counter + 1) // checks //that the counter has been incremented by 1 (each time)
})


```

<hr>

**simulate()** - This method can be used to interact with a rendered element, for example, a button click can be simulated in a test with the following: 
```html
button.simulate('click');
``` 
