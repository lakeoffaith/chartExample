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

} from 'react-native';
import BarChart from './BarChart'
class chartExample extends Component {
    getBarData(){
        let data={
            xValues:['1月','2月','3月'],
            yValues:[
                {
                    data:[200,300,400],
                    label:'ap',
                    config:{
                        color:'blue'
                    }
                },
                {
                    data:[2000,3000,4000],
                    label:'wifi',
                    config:{
                        color:'red'
                    }
                },
                {
                    data:[400,500,600],
                    label:'pc',
                    config:{
                        color:'yellow'
                    }
                }
            ]
        };
        return data;
    }
  render() {
        return(
          <View>
              <View style={{ backgroundColor:'gray',height:200,margin:5}}>
              <BarChart style={{flex:1}} data={this.getBarData()}/>
                  </View>
          </View>
        );
  }
}



AppRegistry.registerComponent('chartExample', () => chartExample);
