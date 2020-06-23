import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search with
 * @param { string } val - Value of data-test attribute
 * @returns {ShallowWrapper}
 */

 
 const findByTestAttribute = (wrapper, val) => {
   return wrapper.find(`[data-test=${val}]`);
 };

 /** 
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props 
 * @param {any} state  - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}


test('it renders without an error', () => {
  const wrapper = setup();
  const appComponent  = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('it renders the increment button', () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1);
});

test('it renders the display counter', () => {
  const wrapper =setup();
  const counterDisplay = wrapper.find("[data-test='counterDisplay']")
  expect(counterDisplay.length).toBe(1);
})

