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

## What is Enzyme?

* Enzyme is a tool that creates a Virtual DOM, which is needed when testing React without a browser.

* Create-React-App uses REACT-DOM for this and so does Enzyme(under the hood)

* Enzyme's extensive toolkit allows developers to search through the DOM using jQuery-type and CSS-type selectors

* Events can also be simulated on the DOM

## Setting up Enzyme

* The setup involves configuring Enzyme to use the adapter specified by the developer.

* The adapter tells Enzyme what type of code to expect
* The following code should be added to the test file:

```html
import Enzyme from ‘enzyme’;
import EnzymeAdapter from ‘enzyme-adapter-react-16’;
```

* Enzyme also needs to be configured with an object that specifies and adapter. This object is an instance of the Adapter Object.
Thus, the following code also needs to be added to the test file:
```html

Enzyme.configure({ adapter: new EnzymeAdapter() });

```

Remove the test code and run npm test to check that the setup has been successful.


## Using Enzyme in tests

The shallow function needs to be required i.e.
```html
import Enzyme, { shallow } from 'enzyme';
```

* The shallow function takes JSX as an argument and returns a shallow wrapper. 

### Shallow Rendering

When writing unit tests for React, shallow rendering can be helpful Shallow rendering allows developers to render elements that are only one level deep i.e.
for a given parent component with various child components, those child components won't be rendered. Instead placeholders will take their place, and only the parent component will be rendered, therefore allowing for quicker testing.

## Debugging with Enzyme

* debug can used to debug

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
        learn react testing!!!
      </h1>
    </div>
```

Allows us to get visibility because it returns the DOM as a string

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

This test passes s