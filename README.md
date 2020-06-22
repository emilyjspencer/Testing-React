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
