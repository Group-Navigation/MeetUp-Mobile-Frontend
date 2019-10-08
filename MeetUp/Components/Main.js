import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Main extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <View>
                <Text> Dashboard Here, With a nested side menu </Text>
            </View>
        );
    }
}

export default Main;