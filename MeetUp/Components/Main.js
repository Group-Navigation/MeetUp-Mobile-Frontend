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
                <Button
                    title = "Create New Group"
                    onPress = {() => {
                        this.props.navigation.navigate('Form'); 
                    }}
                
                />
            </View>
        );
    }
}

export default Main;