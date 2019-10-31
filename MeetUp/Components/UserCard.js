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
        <TouchableOpacity onPress = {this.toggleSelected}>
            {!this.state.userSelected ?
            <View style = {styles.unselectedUserCard}>
                <ImageBackground
                    style = {styles.userImage}
                    source = {{uri: this.props.contact.image}}>
                    </ImageBackground>

                <Text style = {styles.textStyle}>{this.props.contact.name}</Text>
            </View>
            :
            <View style = {styles.unselectedUserCard}>
                <ImageBackground
                    style = {styles.userImage}
                    source = {{uri: this.props.contact.image}}>
                        <Image 
                            source = {{uri: "https://www.pngfind.com/pngs/m/254-2546448_free-png-check-mark-png-png-image-with.png"}}
                            style = {styles.checkmark} 
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
    unselectedUserCard: {
        
    },
    userImage: {
        width: 120, 
        height: 120
    },
    textStyle: {
        textAlign: "center",
        fontSize: 18
    },
    checkmark: {
        width: 120,
        height: 120,
        backgroundColor: "transparent"
    }
});

export default UserCard;