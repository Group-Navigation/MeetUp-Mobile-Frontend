import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Login extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <View>
                <Text> Login Here </Text>
                <Button
                    title = "Go To Dashboard"
                    onPress = {() => {
                        this.props.navigation.navigate('Main'); 
                    }}
                
                />
            </View>
        );
    }
}

export default Login;