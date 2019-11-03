import React, {Component} from 'react';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {TouchableOpacity, Button,Text, View, SafeAreaView, 
  ScrollView, StyleSheet, Dimensions, Image, Animated, FlatList } from 'react-native';
import Main from './Main'; 
import { Swipable } from 'react-native-gesture-handler/Swipeable';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

class Map extends Component{
  static navigationOptions = {
  };

  render() {
    return (
      <View>
        <Text>MAP HERE</Text> 
      </View>
    );
  }
}

class Greeting extends Component {    //each dashboard component gets its own navigation options config
    static navigationOptions = {
    };

    render() {
      const style = StyleSheet.create({
        container:{
          borderWidth: 2,
          borderColor: '#F0F0F0',
          marginLeft: .05*vw,
          marginRight: .05*vw,
          paddingTop: .05*vh,
          paddingBottom: .05*vh,
          borderStyle: 'dashed',
          borderRadius: 1
        },
        text:{
          fontSize: 24,
          textAlign: 'center',
          color: 'gold',
        }
      });

      return (
        <View style = {style.container}>
          <Text style={style.text}>Welcome Back,</Text>
          <Text style={style.text}>User</Text>
        </View>
      );
    }
}

class ProfileAndSettings extends Component{
  static navigationOptions = {
  };

  render(){ 

    const style = StyleSheet.create({
      container:{
        paddingTop: .005*vh,
        paddingBottom: .005*vh,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      tap:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      profile:{
        height: 42,
        width: 42,
        flex: 1
      },
      gear:{
        height: 38,
        width: 38,
        flex: 1
      },
      miniText:{
        fontSize: 16,
        flex: 2
      }
    });

    return(
      <View style={style.container}>
        <TouchableOpacity style={style.tap}>
          <Image style={style.profile}source={require('../Assets/Profile_Pic.png')}/>
          <Text style={style.miniText}> Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tap}>
          <Text style={style.miniText}> Settings</Text>
          <Image style={style.gear}source={require('../Assets/Gear.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}


class FriendRequests extends Component{
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

class GroupInvitations extends Component{
  static navigationOptions = {
  };

  render(){
    return(
      <View>
         <Text>You have been invited to join a new group</Text>
      </View>
    );
  }
}

class Groups extends Component{
  static navigationOptions = {
  };

  render(){
    return(
      <View>
         <Text>Click to view your group</Text>
      </View>
    );
  }
}

class DrawerInformation extends Component{

  static navigationOptions = {
  };

  render(){
    return( 
      <ScrollView>
        <Greeting/>
        <ProfileAndSettings/>
        <FriendRequests/>
        <GroupInvitations/>
        <Groups/>
      </ScrollView>
    )
  }
}


const SideMenu =  createDrawerNavigator({ //first object is the route configs
    Map //MapComponent TODO
  },{ //second object is the drawer navigator configs
    drawerBackgroundColor: 'whitesmoke',
    drawerType: 'slide',
    drawerWidth: .70*vw,
    contentComponent: DrawerInformation
  }
);

//exporting the entire side menu dashboard as a component 
export default createAppContainer(SideMenu);