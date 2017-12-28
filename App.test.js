import React from 'react';
import App from './index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('is true', () => {
  expect(true).toBeTruthy();
});

it('gives three', () => {
  expect(1+2).toBe(3);
});

it('is not false', () => {
  expect(false).not.toBeTruthy();
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
