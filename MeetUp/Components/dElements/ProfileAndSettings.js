import React, {Component} from 'react';
import {TouchableOpacity,Text, View, 
    StyleSheet, Dimensions, Image} from 'react-native';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class ProfileAndSettings extends Component{
    static navigationOptions = {
    };
  
    render(){ 
  
      const style = StyleSheet.create({
        container:{
          paddingTop: .005*vh,
          paddingBottom: .005*vh,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: 'black',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        tap:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        },
        profile:{
          height: 42,
          width: 42,
          flex: 1
        },
        gear:{
          height: 38,
          width: 38,
          flex: 1
        },
        miniText:{
          fontSize: 16,
          flex: 2
        }
      });
  
      return(
        <View style={style.container}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('ProfilePage')}} style={style.tap}>
            <Image style={style.profile} source={require('../../Assets/Profile_Pic.png')}/>
            <Text style={style.miniText}> Profile </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tap}>
            <Text style={style.miniText}> Settings</Text>
            <Image style={style.gear} source={require('../../Assets/Gear.png')}/>
          </TouchableOpacity>
        </View>
      );
    }
  }