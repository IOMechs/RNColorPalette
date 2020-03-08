import React, {Component} from 'react';
import {View, Dimensions, Button, StyleSheet, ScrollView} from 'react-native';
import ColorWheel from './color-wheel-picker/index';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#db3232',
    };
  }
  changeColor = color => this.setState({color});
  render() {
    const {color} = this.state;
    return (
      <ScrollView>
        <View style={styles.main}>
          <ColorWheel
            initialColor={color}
            onColorChange={colorValue => this.changeColor(colorValue)}
            style={{
              width: Dimensions.get('window').width - 40,
              height: Dimensions.get('window').width - 40,
            }}
            thumbStyle={styles.thumbStyle}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.addButton}>
              <Button
                title="Add Color"
                onPress={() => this.props.SelectedColor(color)}
              />
            </View>
            <Button title="Cancel" onPress={this.props.toggleColorPicker} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 30,
  },
  thumbStyle: {height: 30, width: 30, borderRadius: 30},
  buttonContainer: {flexDirection: 'row'},
  addButton: {marginRight: 20},
});
