import React from 'react';
import 'react-native';
import ColorPicker from '../src/color-picker';
import renderer from 'react-test-renderer';


test('ColorPicker Component renders correctly', () => {
  const tree = renderer.create(<ColorPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ChangeColor', () => {
  let ColorPickerComponent = renderer.create(<ColorPicker />).getInstance();
    ColorPickerComponent.changeColor('#db3232');
    expect(ColorPickerComponent.state.color).toEqual('#db3232');
});
