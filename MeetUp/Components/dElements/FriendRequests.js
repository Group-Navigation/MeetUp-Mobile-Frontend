import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

export default class FriendRequests extends Component{
    constructor(props){
      super(props);
      this.state= {
        requests: [{text: "You have no friend Request", id:0},{text: "You have one friend Request", id:1}],  //using a stack to keep track of all of the user's requests
      }
      this.ref =React.createRef();
    }
  
  
    //friend requests stack ontop of eachother
    render(){
  
      const style = StyleSheet.create({
        container:{
          backgroundColor: '#88ffaa',
          borderWidth: 2,
          borderColor: '#9a6b3c',
          marginTop: 20,
          marginHorizontal: 20,
          height: 45,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        },
        LeftActions:{
          backgroundColor: '#38f477',
          justifyContent: 'center',
          flex: 1
        },
        text:{
          color: '#000000',
          fontWeight: '600',
          fontSize: 18
        },
        accept: {
          backgroundColor: '#aaFF22',
          justifyContent: 'center',
          flex: 1
        },
      });
  
      const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange : [0,100],
          outputRange: [0,1],
          extrapolate: 'clamp'
        });
  
        return (
          <View style = {style.accept}>
            {/* <Animated.Image style={[style.check, {transform: [{scale}]}]} source={require('../Assets/Check.png')}/>*/}
            <Animated.Text style = {[style.text, {transform: [{scale}]}]}> Accept </Animated.Text>
          </View> 
        );
      };
        
      return(
            <Swipeable
              containerStyle= {style.container}
              renderLeftActions={LeftActions}
              onSwipeableLeftOpen={() => 
                {
                  this.close;
                  let arr = this.state.requests;
                  let temp = arr.slice(0,arr.length-1);
                  this.setState({
                    requests: temp
                  })
                } 
              }
            > 
              <View>
                <Text style ={style.text}>
                  {this.state.requests[this.state.requests.length-1].text}
                </Text>
              </View>
            </Swipeable>
        );
    }
  }