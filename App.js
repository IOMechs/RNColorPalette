/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  // Text
} from 'react-native';

import MessageBanner from './react-native-color-picker';
const App: () => React$Node = () => {
  const color = [
    'purple',
    '#FF0000',
    '#b4bec8',
    '#64C8D0',
    '#ff6d01',
    '#ffd600',
    '#00bef5',
    '#ff96e8',
  ];

  return (
    <SafeAreaView>
      <MessageBanner colors={color} />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
// });

export default App;
