import React, {Component} from 'react';
import {Text, View} from 'react-native';


export default class Test extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
    };

    render(){
      return (
        <View>
          <Text>Test</Text>
        </View>
      );
    }
}