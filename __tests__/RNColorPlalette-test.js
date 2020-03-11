import React from 'react';
import 'react-native';
import RNColorPalette from '../src/RNColorPalette';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<RNColorPalette />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('togglePalette', () => {
  const RNColorPaletteComponent = renderer.create(<RNColorPalette />).getInstance();
    let test = !RNColorPaletteComponent.state.picker;
    RNColorPaletteComponent.togglePalette();
  expect(RNColorPaletteComponent.state.picker).toEqual(test);
});

it('toggleColorPicker', () => {
    const RNColorPaletteComponent = renderer.create(<RNColorPalette />).getInstance();
      let test = !RNColorPaletteComponent.state.openColorPicker;
      RNColorPaletteComponent.toggleColorPicker();
    expect(RNColorPaletteComponent.state.openColorPicker).toEqual(test);
});
 