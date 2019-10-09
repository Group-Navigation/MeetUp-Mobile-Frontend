import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Button,Text, View} from 'react-native';
import Main from './Main';

class Greeting extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
      title: 'Dashboard Element',
    };

  
    render() {
      return (
        <Main></Main> ///This is where the map component will go
      );
    }
}

const SideMenu =  createDrawerNavigator({ //first object is the route configs
    Greeting,

  },{ //second object is the drawer navigator configs
    drawerBackgroundColor: 'gray',
    drawerType: 'slide',
    drawerWidth: 250
  }
);

//exporting the entire side menu dashboard as a component 
export default createAppContainer(SideMenu);;