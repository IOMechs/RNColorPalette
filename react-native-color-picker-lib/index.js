/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const colors = [
  '#445cb4',
  '#FF0000',
  '#b4bec8',
  '#64C8D0',
  '#ff6d01',
  '#ffd600',
  '#00bef5',
  '#ff96e8',
];
export default class messageBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picker: false,
      colors: props.colors || colors,
      pickedColor: 'orange',
    };
  }

  updatePicker = () => {
    this.setState({
      picker: !this.state.picker,
    });
  };
  colorPicked = color => {
    console.log(color + 'wow');
    this.setState({
      pickedColor: color,
    });
    this.updatePicker();
  };
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity
          style={{
            backgroundColor: this.state.pickedColor,
            width: 40,
            height: 30,
            // top: 10,
          }}
          onPress={() => this.updatePicker()}>
          <Text style={{textAlign: 'center'}}>WOW</Text>
        </TouchableOpacity>
        {this.state.picker ? (
          <View style={{position: 'absolute'}}>
            <View style={styles.popoverArrow} />
            <View style={styles.popoverContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.colors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.colorContent}
                    onPress={() => this.colorPicked(color)}>
                    <View style={styles.assignColor(color)} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: 50,
    // backgroundColor: 'black',
  },
  colorPaletteContainer: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'red',
    position: 'relative',
  },
  popoverContainer: {
    position: 'absolute',
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 4,
    zIndex: 100,
    top: 5,
    left: -100,
    // right: 1,
    shadowColor: '#AAA',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 100,
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
    elevation: 100,
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
