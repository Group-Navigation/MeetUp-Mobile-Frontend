import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class Greeting extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
    };

    render() {
      const style = StyleSheet.create({
        container:{
          borderWidth: 2,
          borderColor: '#F0F0F0',
          marginLeft: .05*vw,
          marginRight: .05*vw,
          paddingTop: .05*vh,
          paddingBottom: .05*vh,
          borderStyle: 'dashed',
          borderRadius: 1
        },
        text:{
          fontSize: 24,
          textAlign: 'center',
          color: 'gold',
        }
      });

      return (
        <View style = {style.container}>
          <Text style={style.text}>Welcome Back,</Text>
          <Text style={style.text}>User</Text>
        </View>
      );
    }
}