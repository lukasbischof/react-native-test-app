import 'react-native';
import React from 'react';
import MyHeader from '../Components/MyHeader';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MyHeader content="Hello" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders', () => {
  const myHeaderTree = renderer.create(<MyHeader />);
  expect(myHeaderTree).toBeTruthy();
});
