import React, {Component} from 'react';
import {TouchableOpacity,Text, View, 
    StyleSheet, Dimensions, Image} from 'react-native';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class CreateGroup extends Component{
    constructor(props)
    {
        super(props);
    }

    onPress = () => {
        this.props.navigation.navigate('Form');
    }

    render(){

        const style = StyleSheet.create({
            container:{
              backgroundColor: '#6FF3FF',
              borderWidth: 2,
              borderColor: '#9a6b3c',
              marginTop: 10,
              marginBottom: 0,
              marginHorizontal: 20,
              height: 45,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center'
            },
            text:{
              color: '#000000',
              fontWeight: '600',
              fontSize: 18
            }
          });

        return(
            <TouchableOpacity onPress = {this.onPress} style={style.container}>
                <Text style={style.text}> Create New Group </Text>
            </TouchableOpacity>
        )
    }
}