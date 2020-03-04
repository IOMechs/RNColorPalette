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
    const {pageY: y, pageX: x, locationY} = event;
    if (screenWidth / 2 < x) {
      if (screenHeight / 2 < y) {
        this.setState({
          positions: {
            right: 5,
            top: y - locationY - 60,
          },
        });
      } else {
        this.setState({
          positions: {
            right: 5,
            top: y - locationY + 40,
          },
        });
      }
    } else {
      if (screenHeight / 2 < y) {
        this.setState({
          positions: {
            left: 5,
            top: y - locationY - 60,
          },
        });
      } else {
        this.setState({
          positions: {
            left: 5,
            top: y - locationY + 40,
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
            style={styles.modalMainContainer}
            onPressOut={() => this.togglePicker()}>
            <View style={[styles.modalContainer(screenWidth), positions]}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollBar(bgColor)}>
                {this.state.colors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.colorContent}
                    onPress={() => this.colorPicked(color)}
                    activeOpacity={1}>
                    {pickedColor === color ? (
                      <View style={styles.assignColor(color)}>
                        <Image source={tick} style={styles.tickImage} />
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
  // Color Modal Styling
  modalMainContainer: {
    flex: 1,
  },
  modalContainer: screenWidth => ({
    width: screenWidth - 30,
    height: 50,
    position: 'absolute',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  }),
  scrollBar: bgColor => ({
    backgroundColor: bgColor,
    borderRadius: 10,
  }),
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
  tickImage: {
    width: 20,
    height: 20,
    padding: 10,
    opacity: 0.7,
    marginLeft: 5,
    marginTop: 5,
  },
});
