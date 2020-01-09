import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ProfilePage extends Component{
    constructor(props){
        super(props);
    }
  
    render() {
      return (
        <View>
             <Image 
                source = {{uri: "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"}}
                style = {styles.userImage} 
            />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        fontSize: 18
    },
    userImage: {
        width: 117, 
        height: 117,
        backgroundColor: "transparent",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2
    }
});

export default ProfilePage;

// const mapStateToProps = state => {
//     return {
//         // contacts: state.contacts,
//         // login: state.login
//     };
// };

// export default connect(
//     mapStateToProps,
//     {
//         addGroups,
//         addCurrentGroup
//     }
// )(ProfilePage);