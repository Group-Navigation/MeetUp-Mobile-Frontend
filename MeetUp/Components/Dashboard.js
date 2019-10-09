import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Button,Text} from 'react-native';

class Greeting extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
      title: 'Dashboard Element',
    };

  
    render() {
      return (
        <Text
          title="WELCOME"
        >
        </Text>
      );
    }
}

const SideMenu =  createDrawerNavigator({ //first object is the route configs
    Greeting,

  },{ //second object is the drawer navigator configs
    drawerBackgroundColor: 'gray',
    drawerType: 'slide',
    drawerWidth: 200
  }
);

//exporting the entire side menu dashboard as a component
export default createAppContainer(SideMenu);