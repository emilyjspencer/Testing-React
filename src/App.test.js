import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

 /** 
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props 
 * @param {any} state  - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search with
 * @param { string } val - Value of data-test attribute
 * @returns {ShallowWrapper}
 */

 
 const findByTestAttribute = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
 }



test('it renders without an error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('it renders the increment button', () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});

test('it renders the display counter', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, 'counterDisplay' )
  expect(counterDisplay.length).toBe(1);
})

test('the counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
})

test('the counter display is incremented by 1 on each increment button click', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttribute(wrapper, 'increment-button');
  button.simulate('click');
  const counterDisplay = findByTestAttribute(wrapper, 'counterDisplay');
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('the counter display is decremented by 1 on each decrement button click', () => {
const counter = 10;
const wrapper = setup(null, { counter });
const button = findByTestAttribute(wrapper, 'decrement-button');
button.simulate('click');
const counterDisplay = findByTestAttribute(wrapper, 'counterDisplay');
expect(counterDisplay.text()).toContain(counter - 1);

})
