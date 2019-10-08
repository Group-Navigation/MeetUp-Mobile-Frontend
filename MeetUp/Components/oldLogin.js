import React, { Component } from "react"; //dsadsadsa
import {AsyncStorage, View , TextInput, Button, Text} from 'react-native';
import axios from "axios";
import _ from "lodash";

class Login extends Component {
  state = {
    acc: {
      email: "",
      password: "",
      name: "",
      lat: 40.6385,
      long: -73.9732
    },
    error: "",
    log: true
  };

  inchange = async ev => {
    let acc = this.state.acc;
    acc[name] = ev;
    await this.setState({ acc });
  };

  api = () => {
    if (this.state.log) return "http://localhost:4000/api/auth";
    else return "http://localhost:4000/api/users";
  };

  submit = async ev => {
    try {
      // console.log(this.props);
      let acc = this.state.acc;
      if (this.state.log) {
        acc = _.pick(this.state.acc, ["email", "password", "lat", "long"]);
      }

      this.setState({ error: "Logging in ..." });
      let res = await axios.post([this.api()], acc);

      await this.setState({ error: res.data });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 1000);
      AsyncStorage.setItem("token", res.headers["x-auth-token"]);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        await this.setState({ error: err.response.data });
        setTimeout(() => {
          this.setState({ error: "" });
        }, 2000);
        console.log(this.state.error);
      }
    }
  };

  gogogo = () => {
    setTimeout(() => {
      this.setState({ log: !this.state.log });
    }, 200);
  };

  render() {

    RegisterComponent = () => {
        return (
            <View className="loginbox">
              <Text className="login">LOGIN</Text>
              <TextInput
                name="email"
                onChangeText={this.inchange}
                type="text"
                placeholder="Email"
              />
              <TextInput
                name="password"
                onChangeText={this.inchange}
                type="password"
                placeholder="Password"
              />
              <View className="errbox">
                <Text className="msg">{this.state.error}</Text>
              </View>
              <View className="btnbox">
                <Button 
                    title= "Login"
                    onPress={this.submit} 
                    className="loginbtn"
                />
                <Button 
                    onClick={this.gogogo} 
                    className="loginbtn"
                    title = "Sign up"
                />
              </View>
            </View>
          )
    }


    LoginComponent = () => {
        return (
            <View className="loginbox">
              <Text className="login regi">SIGN UP</Text>
              <TextInput
                className="reg"
                name="name"
                onChangeText={this.inchange}
                type="text"
                placeholder="Name"
              />
              <TextInput
                className="reg"
                name="email"
                onChangeText={this.inchange}
                type="text"
                placeholder="Email"
              />
              <TextInput
                className="reg"
                name="password"
                onChangeText={this.inchange}
                type="password"
                placeholder="Password"
              />
              <View className="errbox">
                <Text className="msg">{this.state.error}</Text>
              </View>
              <View className="btnbox">
                <Button 
                    onClick={this.submit} 
                    className="loginbtn"
                    title = "Register"
                />
                <Button 
                    onClick={this.gogogo} 
                    className="loginbtn"
                    title = "Cancel"
                />
              </View>
            </View>
          )
    }
        
        return (
            <View>
                {<RegisterComponent/>}
            </View>
        );
  }
}

//// if (AsyncStorage.getItem("token")) {
    //   this.props.navigation.navigate("Main");
    // } 
    // else
    // {    {(this.state.log)?(<LoginComponent />):(<RegisterComponent/>)};
export default Login;
