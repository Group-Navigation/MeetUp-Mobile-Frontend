import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class GroupInvitations extends Component{
    static navigationOptions = {
    };
  
    render(){
      return(
        <View>
           <Text>You have been invited to join a new group</Text>
        </View>
      );
    }
  }