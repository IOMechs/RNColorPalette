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
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  Text,
  Platform
} from 'react-native';
import tick from './tick.png';
import ColorPicker from './color-picker';

export default class RNColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picker: false,
      screenWidth: Dimensions.get('screen').width,
      screenHeight: Dimensions.get('screen').height,
      positions: {},
      openAtTop: null,
      openColorPicker: false,
    };
  }

  togglePalette = () => {
    this.setState({
      picker: !this.state.picker,
    });
  };
  toggleColorPicker = () => {
    this.setState({
      openColorPicker: !this.state.openColorPicker,
    });
  };
  checkElementPosition = event => {
    this.togglePalette();
    const {screenWidth, screenHeight} = this.state;
    const {pageY: y, pageX: x, locationY} = event;
    if (screenWidth / 2 < x) {
      if (screenHeight / 2 < y) {
        this.setState({
          openAtTop: true,
          positions: {
            right: 5,
            top: y - locationY - 60,
          },
        });
      } else {
        this.setState({
          openAtTop: false,
          positions: {
            right: 5,
            top: y - locationY + 40,
          },
        });
      }
    } else {
      if (screenHeight / 2 < y) {
        this.setState({
          openAtTop: true,
          positions: {
            left: 5,
            top: y - locationY - 60,
          },
        });
      } else {
        this.setState({
          openAtTop: false,
          positions: {
            left: 5,
            top: y - locationY + 40,
          },
        });
      }
    }
  };
  render() {
    const {screenWidth, picker, openAtTop, openColorPicker} = this.state;
    let {positions} = this.state;
    const {value, colorContainerStyle} = this.props;
    if (this.props.palettePosition) {
      let {increaseMargin, decreaseMargin} = this.props.palettePosition;
      if (openAtTop === false) {
        if (increaseMargin) {
          increaseMargin = increaseMargin * -1;
        }
        if (decreaseMargin) {
          decreaseMargin = decreaseMargin * -1;
        }
      }
      positions = {
        ...positions,
        top: increaseMargin
          ? positions.top - increaseMargin
          : decreaseMargin
          ? positions.top + decreaseMargin
          : positions.top,
      };
    }
    return (
      <View>
        <View
          style={this.props.style ? this.props.style : {}}
          onTouchStart={e => this.checkElementPosition(e.nativeEvent)}>
          {this.props.children}
        </View>
        <Modal
          transparent={true}
          visible={picker}
          onRequestClose={() => this.togglePalette()}>
          <TouchableOpacity
            style={styles.modalMainContainer}
            onPressOut={() => this.togglePalette()}>
            <View
              style={[
                styles.modalContainer(screenWidth),
                positions,
                this.props.paletteStyle
                  ? this.props.paletteStyle
                  : {backgroundColor: '#fff'},
              ]}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingRight: 8,
                }}>
                {this.props.colorList &&
                  this.props.colorList.length !== 0 &&
                  this.props.colorList.map((color, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.colorContent}
                      onPress={() => {
                        this.props.onItemSelect(color);
                        this.togglePalette();
                      }}
                      activeOpacity={1}>
                      {value === color ? (
                        <View
                          style={[
                            styles.assignColor(color),
                            colorContainerStyle ? colorContainerStyle : {},
                          ]}>
                          <Image source={tick} style={styles.tickImage} />
                        </View>
                      ) : (
                        <View
                          style={[
                            styles.assignColor(color),
                            colorContainerStyle ? colorContainerStyle : {},
                          ]}
                        />
                      )}
                    </TouchableOpacity>
                  ))}
                <View style={styles.colorContent}>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.toggleColorPicker}>
                    <Text style={styles.addButtonText}>
                      +
                    </Text>
                  </TouchableOpacity>
                  <Modal
                    visible={openColorPicker}
                    onRequestClose={() => this.toggleColorPicker()}>
                    <ColorPicker
                      toggleColorPicker={this.toggleColorPicker}
                      SelectedColor={colour => {
                        this.props.AddPickedColor(colour);
                        this.props.onItemSelect(colour);
                        this.toggleColorPicker();
                        this.togglePalette();
                      }}
                    />
                  </Modal>
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalMainContainer: {
    flex: 1,
  },
  modalContainer: screenWidth => ({
    width: screenWidth - 30,
    height: 50,
    position: 'absolute',
    overflow: 'hidden',
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
  addButton: {
    borderWidth: 1.5,
    borderColor: '#6f7370',
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    backgroundColor: '#fff',
    marginLeft: 8
  },
  addButtonText: {
    fontSize: 28,
    color: '#6f7370',
    marginBottom: 3,
    ...Platform.select({
      ios: {
        position: 'relative',
        bottom: 4
      }
    })
  }
});
