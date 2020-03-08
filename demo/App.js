/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RNColorPalette from 'rn-color-palette';
import colorList from './colors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedColor1: 'orange',
      pickedColor2: 'green',
      colors: colorList,
    };
  }
  colorPicked = color => {
    this.setState({
      pickedColor1: color,
    });
  };
  colorPicked2 = color => {
    this.setState({
      pickedColor2: color,
    });
  };
  AddColor = color => {
    this.setState({
      colors: [...this.state.colors, color],
    });
  };
  render() {
    const {pickedColor1, pickedColor2, colors} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Color Palette</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <RNColorPalette
              colorList={colors}
              value={pickedColor2}
              onItemSelect={this.colorPicked2}
              AddPickedColor={colour => this.AddColor(colour)}
              style={{
                backgroundColor: pickedColor2,
                width: 110,
                height: 30,
              }}>
              <View style={styles.paletteText}>
                <Text>Default Palette</Text>
              </View>
            </RNColorPalette>
            <RNColorPalette
              colorList={colors}
              value={pickedColor1}
              onItemSelect={this.colorPicked}
              AddPickedColor={colour => this.AddColor(colour)}
              style={{
                backgroundColor: pickedColor1,
                width: 110,
                height: 30,
              }}
              platteStyle={{
                backgroundColor: '#000',
                borderRadius: 10,
              }}
              plattePosition={{
                increaseMargin: 5, // to increase margin from element
                // decreaseMargin: 20, to decrease default margin
              }}
              colorContainerStyle={{
                borderRadius: 5,
              }}>
              <View style={styles.paletteText}>
                <Text>Custom Palette</Text>
              </View>
            </RNColorPalette>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Color Palette</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = {
  container: {
    flex: 1
  },
  textContainer: {
    height: 500,
    backgroundColor: '#e6c1c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paletteText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
