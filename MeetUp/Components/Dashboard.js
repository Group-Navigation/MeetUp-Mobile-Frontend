import React, {Component} from 'react';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {TouchableOpacity, Button,Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import Main from './Main'; 
import { TextInput } from 'react-native-gesture-handler';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

class Map extends Component{
  static navigationOptions = {
  };

  render() {
    return (
      <View>
        <Text>MAP HERE</Text> 
      </View>
    );
  }
}

class Greeting extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
    };

    render() {
      const style = styles.Greeting;
      return (
        <View style = {style.container}>
          <Text style={style.text}>Welcome Back,</Text>
          <Text style={style.text}>User</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  Greeting:{
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
  },
  ProfileAndSettings:{
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
  }
});

class ProfileAndSettings extends Component{
  static navigationOptions = {
  };

  render(){ 
    const style = styles.ProfileAndSettings;
    return(
      <View style={style.container}>
        <TouchableOpacity style={style.tap}>
          <Image style={style.profile}source={require('../Assets/Profile_Pic.png')}/>
          <Text style={style.miniText}> Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tap}>
          <Text style={style.miniText}> Settings</Text>
          <Image style={style.gear}source={require('../Assets/Gear.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

class FriendRequests extends Component{
  static navigationOptions = {
  };

  render(){
    return(
      <View> 
        <Text>You have a new Friend request</Text>
      </View>
    );
  }
}

class GroupInvitations extends Component{
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

class Groups extends Component{
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

class DrawerInformation extends Component{

  static navigationOptions = {
  };

  render(){
    return( 
      <ScrollView>
        <Greeting/>
        <ProfileAndSettings/>
        <FriendRequests/>
        <GroupInvitations/>
        <Groups/>
      </ScrollView>
    )
  }
}


const SideMenu =  createDrawerNavigator({ //first object is the route configs
    Map //MapComponent TODO
  },{ //second object is the drawer navigator configs
    drawerBackgroundColor: 'whitesmoke',
    drawerType: 'slide',
    drawerWidth: .65*vw,
    contentComponent: DrawerInformation
  }
);

//exporting the entire side menu dashboard as a component 
export default createAppContainer(SideMenu);