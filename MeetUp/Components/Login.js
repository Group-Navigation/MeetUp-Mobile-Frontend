import React, { Component } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";

import axios from 'axios';
import { connect } from "react-redux";
import { addInvitation, addContacts } from "../Actions/redux";

import {GET_INVITATIONS, GET_CONTACTS,TEST} from '../Actions/graphql';
import {withApollo} from 'react-apollo';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      login: true
    }
  }

  storeData = () => {
    console.log(this.state);
    this.props.client.query({query: TEST})
      .then(result=>{console.log(result)})
      .catch(err=>console.log(err));
    //Syntax for query function https://stackoverflow.com/questions/55201963/graphql-mutation-invariant-violation-must-contain-a-query-definition


    this.props.navigation.navigate("Dashboard");   
  };

  //TODO
  //Style it: https://reactnative.dev/docs/style
  render() {
    return (
      <View>
        {this.state.login && (
          <View>
            <Text> Welcome Back </Text>
            <TextInput 
              placeholder = "Enter your displaname" 
              onChangeText= {text => this.setState({username: text})}
              defaultValue = {""}/>
            <TextInput 
              placeholder = "Enter your password" 
              onChangeText= {text => this.setState({password: text})}
              defaultValue = {""}/>
            <Button
              title="Login"
              onPress={this.storeData}
            />
            <TouchableOpacity onPress={() => this.setState({login: false})}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
        {!this.state.login && (
          <View>
            <Button title = "Go Back" onPress= {() => this.setState({login: true})} />
            <Text> Sign Up </Text>
            <TextInput 
              placeholder = "Type your email here" 
              onChangeText= {text => this.setState({email: text})}
              defaultValue = {""}/>
            <TextInput 
              placeholder = "Choose a displaname" 
              onChangeText= {text => this.setState({username: text})}
              defaultValue = {""}/>
            <TextInput 
              placeholder = "Create a password" 
              onChangeText= {text => this.setState({password: text})}
              defaultValue = {""}/>
            <Button
              title="Sign Up"
              onPress={this.storeData}
            />
          </View>
        )}
      </View>
    );
  }
}
//TODO:
//Setting up social Login: https://manage.auth0.com/welcome/#
//https://levelup.gitconnected.com/a-complete-flow-for-social-login-with-react-native-expo-and-amplify-2c9eacc501fe
//https://medium.com/@113408/implementing-social-login-in-android-without-sdks-64a1c49e0bfd
//https://www.npmjs.com/package/react-social-login

const mapStateToProps = (state) => {
  return {
    //
  };
};

export default withApollo(connect(mapStateToProps, {
  addContacts,
  addInvitation,
})(Login));

//EXTRA:
//Documentation for design: https://creately.com/diagram/example/imgseha51/Mobile%20app%20process%20flow

