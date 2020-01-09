import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers/index.js';

import Login from './Components/Login';
import Main from './Components/Main';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import ProfilePage from './Components/ProfilePage';


const AppNavigator = createStackNavigator(
  {
    Login:  Login,
    Dashboard: Dashboard,    //dashboard contains the map as a component
    Main: Main,
    Form: Form,
    ProfilePage: ProfilePage
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
    const store = createStore(reducers);

    return(
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;