import React from 'react';
import 'react-native';
import ColorWheel from '../src/color-wheel-picker/index';
import renderer from 'react-test-renderer';

test('ColorWheel Component renders correctly', () => {
  const tree = renderer.create(<ColorWheel />).toJSON();
  expect(tree).toMatchSnapshot();
});
