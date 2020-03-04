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
      colorList: props.colorList || colors,
      screenWidth: Dimensions.get('screen').width,
      screenHeight: Dimensions.get('screen').height,
      positions: {},
    };
  }

  togglePicker = () => {
    this.setState({
      picker: !this.state.picker,
    });
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
    const {screenWidth, picker} = this.state;
    let {positions} = this.state;
    const {value} = this.props;
    if (this.props.plattePosition) {
      const {marginTop, marginBottom} = this.props.plattePosition;
      positions = {
        ...positions,
        top: marginTop
          ? positions.top - marginTop
          : marginBottom
          ? positions.top + marginBottom
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
          onRequestClose={() => this.togglePicker()}>
          <TouchableOpacity
            style={styles.modalMainContainer}
            onPressOut={() => this.togglePicker()}>
            <View
              style={[
                styles.modalContainer(screenWidth),
                positions,
                this.props.platteStyle
                  ? this.props.platteStyle
                  : {backgroundColor: '#fff'},
              ]}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.state.colorList.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.colorContent}
                    onPress={() => {
                      this.props.onItemSelect(color);
                      this.togglePicker();
                    }}
                    activeOpacity={1}>
                    {value === color ? (
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
  // Color Modal Styling
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
});
