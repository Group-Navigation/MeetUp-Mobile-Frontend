import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {ScrollView, Dimensions}from 'react-native';

import Greeting from './dElements/Greeting';
import ProfileAndSettings from './dElements/ProfileAndSettings';
import FriendRequests from './dElements/FriendRequests';
import GroupInvitations from './dElements/GroupInvitations';
import Groups from './dElements/Groups';
import CreateGroup from './dElements/CreateGroup';
import Map from './Map';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

class Drawer extends Component{
  static navigationOptions = {
  };

  render(){
    return( 
      <ScrollView>
        <Greeting/>
        <ProfileAndSettings navigation={this.props.navigation}/>
        <FriendRequests/>
        <GroupInvitations/>
        <Groups/>
        <CreateGroup navigation={this.props.navigation}/>
      </ScrollView>
    )
  }
}

const SideMenu =  createDrawerNavigator({ //first object is the route configs
    Map 
  },{ //second object is the drawer navigator configs
    drawerBackgroundColor: 'whitesmoke',
    drawerType: 'slide',
    drawerWidth: .70*vw,
    contentComponent: Drawer
  }
);

//exporting the entire side menu dashboard as a component 
export default createAppContainer(SideMenu);