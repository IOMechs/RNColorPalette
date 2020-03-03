/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {Container, Content, Text} from 'native-base';
import MessageBanner from './react-native-color-picker-lib';
import color from './colors';
const App: () => React$Node = () => {
  return (
    <Container>
      <Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MessageBanner colors={color} backgroundColor="#e8e8e8" />
          <MessageBanner colors={color} />
          <MessageBanner colors={color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Color Platte</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MessageBanner colors={color} />
          <MessageBanner colors={color} />
          <MessageBanner colors={color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Color Platte</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MessageBanner colors={color} />
          <MessageBanner colors={color} />
          <MessageBanner colors={color} />
        </View>
      </Content>
    </Container>
  );
};

export default App;

const styles = {
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
};
