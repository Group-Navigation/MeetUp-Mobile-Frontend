import React, {Component} from 'react';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Button,Text, View, SafeAreaView, ScrollView} from 'react-native';
import Main from './Main';
import { TextInput } from 'react-native-gesture-handler';

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
      return (
        <View>
          <Text>Welcome to MeetUp User</Text>
        </View>
      );
    }
}


class ProfileAndSettings extends Component{
  static navigationOptions = {
  };

  render(){
    return(
      <View>
        <Text> Profile Link </Text>
        <Text> Settings Link </Text>
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
    drawerBackgroundColor: 'gray',
    drawerType: 'slide',
    drawerWidth: 250,
    contentComponent: DrawerInformation
  }
);

//exporting the entire side menu dashboard as a component 
export default createAppContainer(SideMenu);;