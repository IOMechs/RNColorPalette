## RNColorPalette (Android & IOS)
A color Picker for React Native Devs :)

Below you will find some information on how to perform common tasks.<br>


## Table of Contents

- [What's new](#whats-new)
- [Installation](#installation)
- [Props](#props)
- [Pull Requests](#pr)
- [License](#license)


## Demo
![](assets/android-demo.gif)

## Features


## Installation

Install the package in your project's folder by using npm or yarn:

```shell
npm install @iomechs/rn-color-palette
```
or
```shell
yarn add @iomechs/rn-color-palette
```

## Basic Usage

Import RNColorPalette in your AppComponent as below:

```javascript
import RNColorPalette from '@iomechs/rn-color-palette';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        colorValue: 'orange',
        colors = ['orange', 'red', '#ffd655', '#abeb34', '#b4bec8', '#0acfae', '#ff6d01']; 
      };
    }
    
    colorPicked = color => {
      this.setState({
        colorValue: color,
      });
    };

    AddColor = color => {
      this.setState({
        colors: [...this.state.colors, color],
      });
    };
    render() {
      const {colors, colorValue} = this.state;
      return (
        <RNColorPalette
          colorList={colors}
          value={colorValue}
          onItemSelect={this.colorPicked}
          AddPickedColor={color => this.AddColor(color)}
          style={{
            backgroundColor: colorValue,
            width: 110,
            height: 30,
          }}>
          <View style={styles.paletteText}>
            <Text>Default Palette</Text>
          </View>
        </RNColorPalette>
      );
    }
  }
}

```


## Props



## Pull Requests

Feel free to make Pull Requests for your feature/fix.
To run the project, run
```shell
npm install
```
or
```shell
yarn
```
then
```shell
npm start
```
## Props

| Props  |  Type  | isRequired | Example                                                                                                                                            |
| :----- | :----: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | string |     Yes     | `Provide value of color to mark as selected.` |
| colorList  | array |     No     | `Provide list of colors to show in palette.` |
| style  | object |     No     | `Style for component passed inside library.` |
| paletteStyle  | object |     No     | `Style for color palette container.` |
| palettePosition  | object |     No     | `It has 2 properties, increaseMargin to increase margin from your component and decreaseMargin to descrease margin.` |
| colorContainerStyle  | object |     No     | `Style color elements inside palette, by-default it's borderRadius: 100.` |
| onItemSelect  | function |     No     | `Return a color which is selected in palette.` |
| AddPickedColor  | function |     No     | `Return a color which is added new from picker and by-default it calls onItemSelect.` |
                                                                     

## License
MIT © [IOMechs](https://github.com/IOmechs)