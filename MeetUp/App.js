import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';

import{Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers/index.js';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import ProfilePage from './Components/ProfilePage';
import UserSearch from './Components/UserSearch';

import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const AppNavigator = createStackNavigator(
  {
    Login:  Login,
    Dashboard: Dashboard,    //dashboard contains the map as a component
    Form: Form,
    ProfilePage: ProfilePage,
    UserSearch: UserSearch
  },
  {
    initialRouteName: 'Login',
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

    const cache = new InMemoryCache();
    const client = new ApolloClient({
      uri: "https://meetup-apollo-backend.herokuapp.com/graphql", //http://192.168.1.9:4000/graphql
      cache: cache,//IDK but it was required
    });
    const store = createStore(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return(
      <Provider store = {store} >
        <ApolloProvider client = {client}>
          <NavigationContainer>
            <AppContainer/>
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    );
  }
}


export default App;