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
import Map from './Components/Map';


const AppNavigator = createStackNavigator(
  {
    Login:  Login,
    Dashboard: Dashboard,    //dashboard contains the map as a component
    Main: Main,
    Form: Form,
    ProfilePage: ProfilePage,
    Map: Map
  },
  {
    initialRouteName: 'Map',
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
    const store = createStore(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return(
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;