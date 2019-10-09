import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View, Text, Button} from 'react-native';
import Login from './Components/Login';
import Main from './Components/Main';
import Form from './Components/Form';



const AppNavigator = createStackNavigator(
  {
    Login:  Login,
    Main: Main,
    Form: Form
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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