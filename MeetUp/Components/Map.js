import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

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
      // timer: null,
    }
    this.updateUserCoords = this.updateUserCoords.bind(this);
  }

    static navigationOptions = {
    }; 

  componentDidMount() {
    this.updateUserCoords();
    // let timer = setInterval(this.updateUserCoords, 5000);
    // this.setState({timer});
   }

  //  componentWillUnmount() {
  //   this.clearInterval(this.state.timer);
  // }

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
          {!!this.state.userLatitude && !!this.state.userLongitude && <MapView.Marker
         coordinate={{"latitude":this.state.userLatitude,"longitude":this.state.userLongitude}}
         title={"Your Location"}
       />}
       </MapView>
      );
    }
  }

