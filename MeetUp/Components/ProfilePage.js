import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class ProfilePage extends Component{
    constructor(props){
        super(props);
    }
  
    render() {
      return (
        <View>
        <View style = {styles.userNameHeader}>
          <Text style = {styles.usernameTextStyle}>Current_User_Username</Text>
        </View>

        <View style = {styles.upperTabs}>
          <ImageBackground
            style = {styles.userOuterImage}
          >
            <Image 
              source = {{uri: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}}
              style = {styles.userImage} 
            />
          </ImageBackground>

          <TouchableOpacity>
            <Text style = {styles.tabsTextStyle}>{this.props.contacts.length}</Text> 
            <Text style = {styles.tabsTextStyle2}> Contacts </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style = {styles.tabsTextStyle}>{this.props.groups.length}</Text> 
            <Text style = {styles.tabsTextStyle2}> Archived </Text>
            <Text style = {styles.tabsTextStyle2}> Groups </Text>
          </TouchableOpacity>
          
        </View>
        <View style = {styles.userFullName}>
          <Text style = {styles.userFullNameTextStyle}>Current User Full Name</Text>
        </View>

        <View>
          <TouchableOpacity style = {styles.editProfileButton}>
            <Text style = {styles.editProfileTextStyle}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.extraButtons}>
          <TouchableOpacity>
            <Image
              source = {{uri: "https://cdn0.iconfinder.com/data/icons/button-outline/64/BUTTON-12-512.png"}}
              style = {styles.individualExtraButtons}
            />
          </TouchableOpacity>
        </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    usernameTextStyle: {
        textAlign: "center",
        fontSize: 18
    },
    userFullNameTextStyle: {
        marginLeft: 10,
        fontSize: 18
    },
    editProfileTextStyle: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5
    },
    tabsTextStyle: {
        textAlign: "center",
        fontSize: 18,
        marginLeft: 30,
        marginTop: 50
    },
    tabsTextStyle2: {
        textAlign: "center",
        fontSize: 18,
        marginLeft: 30,
        marginTop: 5
    },
    userNameHeader:{
      marginTop: 55,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "center",
      flexWrap: "wrap"
    },
    userFullName:{
      marginTop: 15
    },
    userOuterImage: {
        width: 117, 
        height: 117,
        backgroundColor: "rgb(219, 4, 40)",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2,
        marginTop: 35,
        marginLeft: 20
    },
    userImage: {
        width: 110, 
        height: 110,
    },
    upperTabs: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      flexWrap: "wrap"
    },
    editProfileButton: {
      marginTop: 20,
      backgroundColor: "rgb(232, 236, 239)",
      marginLeft: 10,
      marginRight: 10
    },
    individualExtraButtons: {
      width: 117, 
        height: 117,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2,
        marginTop: 35,
        marginLeft: 20
    }
});


const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        groups: state.groups
        // login: state.login
    };
};

export default connect(
    mapStateToProps,
    {}
)(ProfilePage);