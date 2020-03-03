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
  Modal,
  Dimensions,
} from 'react-native';
import tick from './tick.png';
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
      screenWidth: Dimensions.get('screen').width,
      screenHeight: Dimensions.get('screen').height,
      positions: {},
      bgColor: props.backgroundColor || '#ffffff',
    };
  }

  togglePicker = () => {
    this.setState({
      picker: !this.state.picker,
    });
  };
  colorPicked = color => {
    this.setState({
      pickedColor: color,
    });
    this.togglePicker();
  };
  checkElementPosition = event => {
    this.togglePicker();
    const {screenWidth, screenHeight} = this.state;
    const {pageY: y, pageX: x} = event;
    if (screenWidth / 2 < x) {
      if (screenHeight / 2 < y) {
        this.setState({
          positions: {
            right: 5,
            top: y - 80,
          },
        });
      } else {
        this.setState({
          positions: {
            right: 5,
            top: y + 20,
          },
        });
      }
    } else {
      if (screenHeight / 2 < y) {
        this.setState({
          positions: {
            left: 5,
            top: y - 80,
          },
        });
      } else {
        this.setState({
          positions: {
            left: 5,
            top: y + 20,
          },
        });
      }
    }
  };
  render() {
    const {positions, screenWidth, pickedColor, bgColor} = this.state;
    return (
      <View style={styles.main}>
        <View
          style={{
            backgroundColor: pickedColor,
            width: 40,
            height: 30,
          }}
          onTouchStart={e => this.checkElementPosition(e.nativeEvent)}>
          <Text style={{textAlign: 'center'}}>WOW</Text>
        </View>
        <Modal
          transparent={true}
          visible={this.state.picker}
          onRequestClose={() => this.togglePicker()}>
          <TouchableOpacity
            style={{flex: 1}}
            onPressOut={() => this.togglePicker()}>
            <View
              style={[
                {
                  width: screenWidth - 30,
                  height: 50,
                  position: 'absolute',
                },
                positions,
              ]}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  backgroundColor: bgColor,
                  borderRadius: 10,
                }}>
                {this.state.colors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.colorContent}
                    onPress={() => this.colorPicked(color)}
                    activeOpacity={1}>
                    {pickedColor === color ? (
                      <View style={styles.assignColor(color)}>
                        <Image
                          source={tick}
                          style={{
                            width: 22,
                            height: 22,
                            padding: 10,
                            opacity: 1.0,
                            marginLeft: 3,
                            marginTop: 3,
                          }}
                        />
                      </View>
                    ) : (
                      <View style={styles.assignColor(color)} />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: 50,
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
