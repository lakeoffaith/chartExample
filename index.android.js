/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ScrollView,
    Image
} from 'react-native';
import {
 MKButton,
 MKColor,
 MKIconToggle,
 getTheme
} from 'react-native-material-kit'
const theme=getTheme();
const styles=require('./styles');
class cardExample extends Component {
  render() {
      const action = (<Text> My action</Text>);
      const menu = (
          <MKIconToggle
              checked={true}
              onCheckedChange={this._onIconChecked}
              onPress={this._onIconClicked}
          >
              <Text pointerEvents="none"
                    style={styles.toggleTextOff}>Off</Text>
              <Text state_checked={true}
                    pointerEvents="none"
                    style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
          </MKIconToggle>
      );
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* Here the magic happens*/}
                <View style={theme.cardStyle}>
                    <Image source={ require('./img/welcome.jpg')} style={theme.cardImageStyle}/>
                    <Text style={theme.cardTitleStyle}>Welcome</Text>
                    <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
                        style={{
                padding : 15,
              }}
                    >
                        <Text style={[theme.cardContentStyle, {padding:0}]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </Text>
                    </View>
                    <View style={theme.cardMenuStyle}>{menu}</View>
                    <View style={theme.cardActionStyle}>
                        <Text>My Action</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
  }
}



AppRegistry.registerComponent('cardExample', () => cardExample);
