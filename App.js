/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
// import {ColorPicker} from 'react-native-color-picker';
const slides = [
  {
    key: '11 MB',
    text: 'FREE ',
    title: 'Mobile ',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#20d2bb',
  },
  {
    key: '52 MB',
    title: 'Flight ',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#febe29',
  },
  {
    key: '14 MB',
    text: 'FREE',
    title: 'Great ',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#22bcb5',
  },
  {
    key: '45 MB',
    title: 'Best ',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#3395ff',
  },
  {
    key: '33 MB',
    title: 'Bus ',
    text: 'FREE',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#f6437b',
  },
  {
    key: '77 MB',
    title: 'Train ',
    uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
    backgroundColor: '#febe29',
  },
];

const App = () => {
  return (
    <View style={styles.main}>
      {/* <TouchableOpacity> */}
      {/* <View style={styles.colorPaletteContainer}> */}
      <View style={styles.popoverArrow} />
      <View style={styles.popoverContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[
            '#445cb4',
            '#FF0000',
            '#b4bec8',
            '#64C8D0',
            '#ff6d01',
            '#ffd600',
            '#00bef5',
            '#ff96e8',
          ].map((color, index) => (
            <View key={index} style={styles.colorContent}>
              <View style={styles.assignColor(color)} />
            </View>
          ))}
        </ScrollView>
      </View>
      {/* </View> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  colorPaletteContainer: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'red',
    position: 'relative',
  },
  popoverContainer: {
    // position: 'absolute',
    width: 200,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    // top: -70,
    // left: 0,
    shadowColor: '#AAA',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    flexDirection: 'row',
  },
  popoverArrow: {
    top: -20,
    left: 16,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    margin: 0,
    marginLeft: -6,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: '#AAA',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0,
    shadowRadius: 1,
    elevation: 30,
  },
  colorContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assignColor: color => {
    return {
      height: 30,
      width: 30,
      borderRadius: 100,
      marginLeft: 8,
      backgroundColor: color,
    };
  },
});

export default App;
