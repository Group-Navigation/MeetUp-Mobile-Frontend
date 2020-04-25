import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const colors = [
  '#73F1CE',
  '#00C400',
  '#0000B2',
  '#50B4D2',
  '#9700A6',
  '#EBEDE7',
  '#2F7B84',
  '#EAF253',
  '#EA0653',
  '#EB7D22'
];

let selectedColors = [];

let curEndOfColorArray = colors.length;

export default class Map extends Component{
  constructor(props){
    super(props);

    this.state = {
        initialUserRegion: {
          latitude: 41.7029257,
          longitude: -75.9929633,
          latitudeDelta: 30,
          longitudeDelta: 30,
        },
    }
    this.updateUserCoords = this.updateUserCoords.bind(this);
    this.selectRandomColor = this.selectRandomColor.bind(this);

  }


    static navigationOptions = {
    }; 

  componentDidMount() {
    this.updateUserCoords();
   }


  //updates user's current coordinates
  updateUserCoords(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let currentRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        this.setState({
          initialUserRegion: currentRegion,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
  }

  //selects random colors for the user paths from the 'colors' array.
  //the same color cannot be chosen twice, unless the size of the group exceeds the length of the array.
  selectRandomColor(){
    let randomColorNum = Math.floor(Math.random() * curEndOfColorArray);
    let selectedColor = colors[randomColorNum];
    let temp = colors[curEndOfColorArray - 1]; //swap randomly selected color with the color at the current end of the array
    colors[curEndOfColorArray - 1] = selectedColor;
    colors[randomColorNum] = temp;
    curEndOfColorArray--; //decrease current end of the array
    if (curEndOfColorArray <= 0){
      curEndOfColorArray = colors.length; //if all colors are selected, reset array's length
    }
    selectedColors.push(selectedColor)
    return selectedColor;
  }
  
    render() {
      return (
        <MapView
        style={{ flex: 1, width: "100%" }}
        region={this.state.initialUserRegion}
        followUserLocation={true}
        showsUserLocation={true}
        ref={ref => (this.mapView = ref)}
        initialRegion={this.state.initialUserRegion}
        >
          <Polyline
          coordinates={[
            { latitude: 40.611202, longitude: -73.978327 },
            { latitude: 40.610838, longitude: -73.978248 },
            { latitude: 40.611001, longitude: -73.976722 },
            { latitude: 40.609486, longitude:-73.974183 },
            { latitude: 40.608706, longitude: -73.974019 },
            { latitude: 40.609782, longitude: -73.964326 },
            { latitude: 40.606756, longitude: -73.963746 },
            { latitude: 40.607226, longitude: -73.962305}
          ]}
          strokeColor={this.selectRandomColor()}
		strokeWidth={4}
          />
       </MapView>
      );
    }
  }

