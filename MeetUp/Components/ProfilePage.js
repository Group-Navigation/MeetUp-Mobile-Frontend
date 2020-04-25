import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {
          bottomSection: "GROUPS"
        }
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
            <Text style = {styles.tabsTextStyle}>{this.props.archivedGroups.length}</Text> 
            <Text style = {styles.tabsTextStyle2}> Archived </Text>
            <Text style = {styles.tabsTextStyle3}> Groups </Text>
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
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('UserSearch')}} style = {styles.individualExtraButtons}>
            <Image
              source = {{uri: "http://cdn.onlinewebfonts.com/svg/img_517898.png"}}
              style = {styles.individualExtraButtons}
            />
            <Text style = {styles.extraButtonsText}>Find Users</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Form')}} style = {styles.individualExtraButtons}>
            <Image
              source = {{uri: "http://cdn.onlinewebfonts.com/svg/img_339639.png"}}
              style = {styles.individualExtraButtons}
            />
            <Text style = {styles.extraButtonsText}>New Group</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.borderLine}>
        </View>

        <View style = {styles.groupList}>
          <View style = {styles.numberOfActiveGroups}>
            <Text style={styles.editProfileTextStyle}>You have {this.props.groups.length} active groups</Text>
          </View>

          <FlatList 
            data= {this.props.groups}
            renderItem={ ({item}) => {
              return (
                <TouchableOpacity key={item.name} style = {styles.individualGroupContainer}>
                  <Text style = {styles.individualGroup}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={ group => group.id.toString()}
          />
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
    tabsTextStyle3: {
      textAlign: "center",
      fontSize: 18,
      marginLeft: 30
  },
    extraButtonsText: {
      textAlign: "center",
      fontSize: 15,
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
        width: 85, 
        height: 85,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2
    },
    extraButtons: {
      justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        flexWrap: "wrap",
        marginTop: 30
    },
    numberOfActiveGroups: {
        marginTop: 3
    },
    borderLine: {
      backgroundColor: "black",
      height: 2,
      marginTop: 30
    },
    individualGroup: {
      textAlign: "center",
      fontSize: 18,
      marginTop: 15,
      marginBottom: 5,
    },
    individualGroupContainer: {
      marginTop: 10,
      marginBottom: 7,
      marginLeft: 20,
      marginRight: 20,
      borderStyle: "solid",
      borderTopWidth: 1
    }
});


const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        groups: state.groups,
        archivedGroups: state.archivedGroups
        // login: state.login
    };
};

export default connect(
    mapStateToProps,
    {}
)(ProfilePage);