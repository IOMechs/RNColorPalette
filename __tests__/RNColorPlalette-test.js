import React from 'react';
import 'react-native';
import RNColorPalette from '../src/RNColorPalette';
import renderer from 'react-test-renderer';

test('RNColorPalette Component renders correctly', () => {
  const tree = renderer.create(<RNColorPalette />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('should change the state of the color picker when we toggle the palette', () => {
  const RNColorPaletteComponent = renderer.create(<RNColorPalette />).getInstance();
    let test = !RNColorPaletteComponent.state.picker;
    RNColorPaletteComponent.togglePalette();
  expect(RNColorPaletteComponent.state.picker).toEqual(test);
});

it('should change the state of the selected color when we select a color', () => {
    const RNColorPaletteComponent = renderer.create(<RNColorPalette />).getInstance();
      let test = !RNColorPaletteComponent.state.openColorPicker;
      RNColorPaletteComponent.toggleColorPicker();
    expect(RNColorPaletteComponent.state.openColorPicker).toEqual(test);
});
 