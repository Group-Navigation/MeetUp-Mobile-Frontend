import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {Button} from 'react-native';

class MyHomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
}

const DashboardNavigator =  createDrawerNavigator({ //route Configs, Drawer Navigator Configs
    Home: MyHomeScreen
});

class Dashboard extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){

        const DashboardContainer = createAppContainer(DashboardNavigator);
        return ( 
            <DashboardContainer/>
        );

    }
}

export default Dashboard;