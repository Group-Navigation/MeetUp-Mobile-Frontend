import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class Groups extends Component{
    static navigationOptions = {
    };
  
    render(){
      return(
        <View>
           <Text>Click to view your group</Text>
        </View>
      );
    }
  }