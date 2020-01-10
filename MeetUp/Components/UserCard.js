import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { apisAreAvailable } from 'expo';


class UserCard extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            userSelected: false
        }
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    //validates input and creates a new group
    toggleSelected(){
        if(!this.state.userSelected){
            this.props.addUserToGroup(this.props.contact);
        }
        else{
            this.props.removeUserFromGroup(this.props.contact);
        }
        this.setState({
            userSelected: !this.state.userSelected
        })
    }

    render(){
        return(
        <TouchableOpacity onPress = {this.toggleSelected} style = {styles.fullContact}>
            {!this.state.userSelected ?
            <View>
                <ImageBackground
                    style = {styles.userImageUnselected}
                    >
                        <Image 
                            source = {{uri: this.props.contact.image}}
                            style = {styles.userImage} 
                        />
                    </ImageBackground>

                <Text style = {styles.textStyle}>{this.props.contact.name}</Text>
            </View>
            :
            <View>
                <ImageBackground
                    style = {styles.userImageSelected}
                    // source = {{uri: this.props.contact.image}}
                    >
                        <Image 
                            source = {{uri: this.props.contact.image}}
                            style = {styles.userImage} 
                        />
                </ImageBackground>

                <Text style = {styles.textStyle}>{this.props.contact.name}</Text>
            </View>
            }
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    fullContact: {
        marginTop: 8,
        marginBottom: 10
    },
    userImage: {
        width: 110, 
        height: 110,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 18
    },
    userImageUnselected: {
        width: 117, 
        height: 117,
        backgroundColor: "transparent",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2
    },
    userImageSelected: {
        width: 117, 
        height: 117,
        backgroundColor: "rgb(51, 204, 51)",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 2
    }
});

export default UserCard;
