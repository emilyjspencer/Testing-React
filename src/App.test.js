import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('it renders without an error', () => {
  const wrapper = shallow(<App />);
  const appComponent  = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('it renders the increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1);
});

