import React from 'react';
import 'react-native';
import ColorWheel from '../src/color-wheel-picker/index';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ColorWheel />).toJSON();
  expect(tree).toMatchSnapshot();
});
