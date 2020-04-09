import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component{
    static navigationOptions = {
    }; 
  
    render() {
      return (
        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1, width: "100%" }}
        />
      );
    }
  }