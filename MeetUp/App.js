import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View, Text, Button, StatusBar} from 'react-native';
import Login from './Components/Login';
import Main from './Components/Main';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';



const AppNavigator = createStackNavigator(
  {
    Login:  Login,
    Dashboard: Dashboard,    //dashboard contains the map as a component
    Main: Main,
    Form: Form
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions:{
      headerTransparent: true
    }
  },
);

class App extends Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    const AppContainer = createAppContainer(AppNavigator);

    return(
      <AppContainer/>
    );
  }
}

export default App;