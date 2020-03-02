/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {SafeAreaView, View, Text} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';
import MessageBanner from './react-native-color-picker';
const App: () => React$Node = () => {
  const color = [
    'green',
    '#FF0000',
    '#b4bec8',
    '#64C8D0',
    '#ff6d01',
    '#ffd600',
    '#00bef5',
  ];

  return (
    <Container>
      <Header />
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#FF9501'}}>
              <Icon active name="airplane" />
            </Button>
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <MessageBanner colors={color} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Text>GeekyAnts</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

export default App;
